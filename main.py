from flask import Flask, jsonify, request, make_response
import psycopg2
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime
import bcrypt
import jwt

app = Flask(__name__)

# Configuração da chave secreta para JWT
app.config['SECRET_KEY'] = 'sua-chave-secreta'  # Altere para uma chave segura

# Configuração do banco de dados
DATABASE_URL = {
    'dbname': 'projculinaria',
    'user': 'postgres',
    'password': '84650052',
    'host': 'localhost'
}


def connect_db():
    conn = psycopg2.connect(**DATABASE_URL)
    return conn

@app.route('/')
def home():
    return "Bem-vindo ao aplicativo de receitas!"

# Adicionar cabeçalhos CORS manualmente
@app.after_request
def add_cors_headers(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
    return response

# Modelos de Pydantic para as receitas e ingredientes (apenas para referência)
class Ingrediente(BaseModel):
    nome: str
    quantidade: str

class Receita(BaseModel):
    id: int
    nome: str
    data_pub: datetime
    nota: float
    usuarioUsername: str
    modoPreparo: str
    ingredientes: Optional[List[Ingrediente]] = []

class CreateReceita(BaseModel):
    nome: str
    data_pub: datetime
    nota: float
    usuarioUsername: str
    modoPreparo: str
    ingredientes: Optional[List[Ingrediente]] = []
    
# Função para proteger rotas usando JWT
def token_required(f):
    def decorator(*args, **kwargs):
        token = request.headers.get('Authorization').split(" ")[1]
        if not token:
            return jsonify({"message": "Token é necessário!"}), 401
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])
            current_username = data['username']
        except:
            return jsonify({"message": "Token é inválido!"}), 401
        return f(current_username, *args, **kwargs)
    return decorator

# Exemplo de rota protegida
@app.route('/protected', methods=['GET'])
@token_required
def protected_route(current_username):
    return jsonify({"message": f"Bem-vindo, usuário {current_username}!"}), 200


@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data['email']
    senha = data['senha']

    conn = connect_db()
    cursor = conn.cursor()

    # Buscar o usuário pelo email
    cursor.execute('SELECT username, senha FROM "Usuario" WHERE email=%s', (email,))
    user = cursor.fetchone()

    cursor.close()
    conn.close()

    # Verificar se o usuário existe e se a senha está correta
    if not user or not bcrypt.checkpw(senha.encode('utf-8'), user[1].encode('utf-8')):
        return jsonify({"message": "Credenciais inválidas"}), 401

    # Gerar o token JWT
    token = jwt.encode({
        'username': user[0],
        'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)
    }, app.config['SECRET_KEY'], algorithm="HS256")

    return jsonify({"token": token}), 200

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    email = data['email']
    senha = data['senha']
    username = data['username']  # Adiciona o username
    data_nasc = data.get('data_nasc')  # Adiciona a data de nascimento
    idade = data.get('idade')  # Adiciona a idade
    tipo = data.get('tipo', 'user')  # Define o tipo de usuário, padrão 'user'

    # Hash da senha usando bcrypt
    hashed_password = bcrypt.hashpw(senha.encode('utf-8'), bcrypt.gensalt())

    conn = connect_db()
    cursor = conn.cursor()

    try:
        cursor.execute("""
            INSERT INTO "Usuario" (username, email, senha, data_nasc, idade, tipo) 
            VALUES (%s, %s, %s, %s, %s, %s)
        """, (username, email, hashed_password.decode('utf-8'), data_nasc, idade, tipo))
        conn.commit()
    except psycopg2.Error as e:
        return jsonify({"message": "Erro ao registrar usuário", "error": str(e)}), 400
    finally:
        cursor.close()
        conn.close()

    return jsonify({"message": "Usuário registrado com sucesso!"}), 201

# Obter todas as receitas
@app.route("/receitas", methods=["GET"])
def get_receitas():
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute('SELECT id, nome, data_pub, nota, "usuarioUsername", "modoPreparo" FROM "Receita"')
    receitas = cursor.fetchall()
    receitas_detalhadas = []
    for receita in receitas:
        cursor.execute("""
            SELECT ing.nome, con.quantidade
            FROM "Ingrediente" ing
            JOIN "Contem" con ON con."ingredNome" = ing.nome
            WHERE con."receitaId" = %s
        """, (receita[0],))
        ingredientes = cursor.fetchall()
        receitas_detalhadas.append({
            'id': receita[0],
            'nome': receita[1],
            'data_pub': receita[2],
            'nota': receita[3],
            'usuarioUsername': receita[4],
            'modoPreparo': receita[5],
            'ingredientes': [{'nome': ing[0], 'quantidade': ing[1]} for ing in ingredientes]
        })
    cursor.close()
    conn.close()
    return jsonify(receitas_detalhadas)

# Obter uma receita por ID
@app.route("/receitas/<int:id>", methods=["GET"])
def get_receita(id):
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute('SELECT id, nome, data_pub, nota, "usuarioUsername", "modoPreparo" FROM "Receita" WHERE id=%s', (id,))
    receita = cursor.fetchone()
    if not receita:
        return jsonify({"detail": "Receita não encontrada"}), 404
    
    cursor.execute("""
        SELECT ing.nome, con.quantidade
        FROM "Ingrediente" ing
        JOIN "Contem" con ON con."ingredNome" = ing.nome
        WHERE con."receitaId" = %s
    """, (id,))
    ingredientes = cursor.fetchall()
    
    cursor.close()
    conn.close()
    return jsonify({
        'id': receita[0],
        'nome': receita[1],
        'data_pub': receita[2],
        'nota': receita[3],
        'usuarioUsername': receita[4],
        'modoPreparo': receita[5],
        'ingredientes': [{'nome': ing[0], 'quantidade': ing[1]} for ing in ingredientes]
    })

# Criar nova receita
@app.route("/receitas", methods=["POST"])
def create_receita():
    data = request.get_json()
    usuario_username = data.get('usuarioUsername', 'admin')  # Define 'admin' como padrão se o usuário não for fornecido
    conn = connect_db()
    cursor = conn.cursor()

    # Insere a nova receita
    cursor.execute("""
        INSERT INTO "Receita" (nome, data_pub, nota, "usuarioUsername", "modoPreparo") 
        VALUES (%s, %s, %s, %s, %s) RETURNING id
    """, (data['nome'], data['data_pub'], data['nota'], usuario_username, data['modoPreparo']))

    receita_id = cursor.fetchone()[0]

    # Insere os ingredientes associados à receita
    for ingrediente in data['ingredientes']:
        quantidade = ingrediente.get('quantidade') or '1'  # Define um valor padrão para quantidade se for None ou vazio
        cursor.execute("""
            INSERT INTO "Ingrediente" (nome, "usuarioUsername") 
            VALUES (%s, %s)
            ON CONFLICT (nome) DO NOTHING
        """, (ingrediente['nome'], usuario_username))
        
        cursor.execute("""
            INSERT INTO "Contem" ("receitaId", "ingredNome", quantidade) 
            VALUES (%s, %s, %s)
        """, (receita_id, ingrediente['nome'], quantidade))

    conn.commit()
    cursor.close()
    conn.close()

    return jsonify({"id": receita_id}), 201

@app.route("/receitas/<int:id>", methods=["PUT"])
@app.route("/receitas/<int:id>", methods=["PUT"])
def update_receita(id):
    data = request.get_json()
    usuario_username = data.get('usuarioUsername', 'admin')  # Define 'admin' como padrão se o usuário não for fornecido
    conn = connect_db()
    cursor = conn.cursor()

    # Atualiza a receita
    cursor.execute("""
        UPDATE "Receita" SET nome=%s, nota=%s, "modoPreparo"=%s WHERE id=%s
    """, (data['nome'], data['nota'], data['modoPreparo'], id))

    # Remove os ingredientes atuais da receita
    cursor.execute('DELETE FROM "Contem" WHERE "receitaId"=%s', (id,))

    # Adiciona os novos ingredientes
    for ingrediente in data['ingredientes']:
        quantidade = ingrediente.get('quantidade') or '1'  # Define um valor padrão para quantidade se for None ou vazio
        cursor.execute("""
            INSERT INTO "Ingrediente" (nome, "usuarioUsername") 
            VALUES (%s, %s)
            ON CONFLICT (nome) DO NOTHING
        """, (ingrediente['nome'], usuario_username))
        
        cursor.execute("""
            INSERT INTO "Contem" ("receitaId", "ingredNome", quantidade) 
            VALUES (%s, %s, %s)
        """, (id, ingrediente['nome'], quantidade))

    conn.commit()
    cursor.close()
    conn.close()

    return jsonify({"message": "Receita atualizada com sucesso"}), 200

@app.route("/receitas/<int:id>", methods=["DELETE"])
def delete_receita(id):
    conn = connect_db()
    cursor = conn.cursor()
    
    cursor.execute('DELETE FROM "Contem" WHERE "receitaId"=%s', (id,))
    cursor.execute('DELETE FROM "Receita" WHERE id=%s', (id,))
    
    conn.commit()
    cursor.close()
    conn.close()
    
    return jsonify({"message": "Receita deletada com sucesso"}), 200

# Endpoint para obter todos os ingredientes
@app.route("/ingredientes", methods=["GET"])
def get_ingredientes():
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute('SELECT nome, icone FROM "Ingrediente"')
    ingredientes = cursor.fetchall()
    cursor.close()
    conn.close()

    ingredientes_list = [{'name': ing[0]} for ing in ingredientes]
    return jsonify(ingredientes_list)

@app.route("/ingredientes", methods=["POST"])
def create_ingrediente():
    data = request.get_json()
    nome = data.get('name')
    icone = None  # Define icone como NULL
    receita_id = None  # Define receitaId como NULL
    usuario_username = 'admin'  # Define o usuário como 'admin' por padrão
    quantidade = '1'  # Define quantidade como '1' por padrão

    if not nome:
        return jsonify({"error": "O nome do ingrediente é obrigatório"}), 400

    conn = connect_db()
    cursor = conn.cursor()
    
    cursor.execute("""
        INSERT INTO "Ingrediente" (nome, icone, "receitaId", "usuarioUsername", quantidade) 
        VALUES (%s, %s, %s, %s, %s)
    """, (nome, icone, receita_id, usuario_username, quantidade))
    
    conn.commit()
    cursor.close()
    conn.close()
    
    return jsonify({"message": "Ingrediente criado com sucesso!"}), 201

# Endpoint para atualizar um ingrediente
@app.route("/ingredientes/<string:name>", methods=["PUT"])
def update_ingrediente(name):
    data = request.get_json()
    usuario_username = data.get('usuarioUsername', 'admin')  # Define 'admin' como padrão se o usuário não for fornecido
    
    conn = connect_db()
    cursor = conn.cursor()
    
    # Atualiza o ingrediente com apenas o nome e usa valores padrão para os outros campos
    cursor.execute("""
        UPDATE "Ingrediente" 
        SET "nome"=%s, "icone"=NULL, "receitaId"=1, "quantidade"='1', "usuarioUsername"=%s 
        WHERE "nome"=%s
    """, (data['name'], usuario_username, name))
    
    conn.commit()
    cursor.close()
    conn.close()
    
    return jsonify({"message": "Ingrediente atualizado com sucesso"}), 200
# Endpoint para excluir um ingrediente
@app.route("/ingredientes/<string:name>", methods=["DELETE"])
def delete_ingrediente(name):
    conn = connect_db()
    cursor = conn.cursor()
    
    cursor.execute('DELETE FROM "Ingrediente" WHERE nome=%s', (name,))
    
    conn.commit()
    cursor.close()
    conn.close()
    
    return jsonify({"message": "Ingrediente excluído com sucesso!"}), 200
################################################################ TAG
@app.route("/tags", methods=["GET"])
def get_tags():
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute('SELECT nome, descricao, cor FROM "Tag"')
    tags = cursor.fetchall()
    cursor.close()
    conn.close()

    tags_list = [{'name': tag[0], 'description': tag[1], 'color': tag[2]} for tag in tags]
    return jsonify(tags_list)

@app.route("/tags", methods=["POST"])
def create_tag():
    data = request.get_json()
    usuario_username = data.get('usuarioUsername', 'admin')
    conn = connect_db()
    cursor = conn.cursor()
    
    cursor.execute("""
        INSERT INTO "Tag" (nome, descricao, cor, "usuarioUsername") 
        VALUES (%s, %s, %s, %s)
    """, (data['name'], data['description'], data['color'], usuario_username))
    
    conn.commit()
    cursor.close()
    conn.close()
    
    return jsonify({"message": "Tag criada com sucesso!"}), 201

# Endpoint para atualizar uma tag existente
@app.route("/tags/<string:nome>", methods=["PUT"])
def update_tag(nome):
    data = request.get_json()
    usuario_username = data.get('usuarioUsername', 'admin')
    conn = connect_db()
    cursor = conn.cursor()
    
    cursor.execute("""
        UPDATE "Tag" SET descricao=%s, cor=%s, "usuarioUsername"=%s WHERE nome=%s
    """, (data['description'], data['color'], usuario_username, nome))
    
    conn.commit()
    cursor.close()
    conn.close()
    
    return jsonify({"message": "Tag atualizada com sucesso!"}), 200

# Endpoint para deletar uma tag
@app.route("/tags/<string:nome>", methods=["DELETE"])
def delete_tag(nome):
    conn = connect_db()
    cursor = conn.cursor()
    
    cursor.execute('DELETE FROM "Tag" WHERE nome=%s', (nome,))
    
    conn.commit()
    cursor.close()
    conn.close()
    
    return jsonify({"message": "Tag deletada com sucesso!"}), 200

if __name__ == '__main__':
    app.run(debug=True)
