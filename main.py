from flask import Flask, jsonify, request, make_response
import psycopg2
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime
import bcrypt
import jwt
from datetime import datetime, timedelta

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
        return jsonify({"message": "Credenciais inválidas", "success": False}), 401

    # Gerar o token JWT
    token = jwt.encode({
        'username': user[0],
        'exp': datetime.utcnow() + timedelta(hours=1)
    }, app.config['SECRET_KEY'], algorithm="HS256")

    return jsonify({"token": token, "username": user[0], "success": True}), 200

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    email = data['email']
    senha = data['senha']
    username = data['username']  # Adiciona o username
    data_nasc = data.get('data_nasc')  # Adiciona a data de nascimento
    idade = data.get('idade')  # Adiciona a idade
    tipo = data.get('tipo', 'user')  # Define o tipo de usuário, padrão 'user'

    conn = connect_db()
    cursor = conn.cursor()

    # Verifica se já existe um usuário com o mesmo e-mail ou username
    cursor.execute('SELECT 1 FROM "Usuario" WHERE email = %s OR username = %s', (email, username))
    existing_user = cursor.fetchone()

    if existing_user:
        cursor.close()
        conn.close()
        return jsonify({"message": "E-mail ou nome de usuário já está em uso"}), 400

    # Hash da senha usando bcrypt
    hashed_password = bcrypt.hashpw(senha.encode('utf-8'), bcrypt.gensalt())

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
@app.route("/receitas", methods=["GET"])
def get_receitas_filtered():
    nome = request.args.get('nome')
    tags = request.args.getlist('tags[]')
    ingredientes = request.args.getlist('ingredientes[]')
    
    conn = connect_db()
    cursor = conn.cursor()

    query = '''
        SELECT r.id, r.nome, r.data_pub, r.nota, r."usuarioUsername", r."modoPreparo"
        FROM "Receita" r
        LEFT JOIN "Contem" c ON r.id = c."receitaId"
        LEFT JOIN "Ingrediente" i ON c."ingredNome" = i.nome
        LEFT JOIN "Classifica" cl ON i.nome = cl."ingredNome"
        LEFT JOIN "Tag" t ON cl."tagNome" = t.nome
    '''
    conditions = []
    params = []

    if nome:
        conditions.append('r.nome ILIKE %s')
        params.append(f'%{nome}%')

    if tags:
        conditions.append('t.nome = ANY(%s)')
        params.append(tags)

    if ingredientes:
        conditions.append('i.nome = ANY(%s)')
        params.append(ingredientes)

    if conditions:
        query += ' WHERE ' + ' AND '.join(conditions)
    
    query += ' GROUP BY r.id'

    cursor.execute(query, tuple(params))
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



@app.route("/receitas", methods=["POST"])
def create_receita():
    data = request.get_json()
    usuario_username = data.get('usuarioUsername', 'admin')
    conn = connect_db()
    cursor = conn.cursor()

    try:
        # Verifica se todos os campos obrigatórios foram fornecidos
        if not all(key in data for key in ('nome', 'data_pub', 'modoPreparo', 'ingredientes')):
            return jsonify({"message": "Campos obrigatórios faltando"}), 400

        # Insere a nova receita
        cursor.execute("""
            INSERT INTO "Receita" (nome, data_pub, nota, "usuarioUsername", "modoPreparo") 
            VALUES (%s, %s, %s, %s, %s) RETURNING id
        """, (data['nome'], data['data_pub'], 1, usuario_username, data['modoPreparo']))
        receita_id = cursor.fetchone()[0]

        # Insere os ingredientes e cria a relação na tabela `Contem`
        for ingrediente in data['ingredientes']:
            quantidade = ingrediente.get('quantidade', '1')  # Define 1 como padrão

            # Insere a relação na tabela `Contem`
            cursor.execute("""
                INSERT INTO "Contem" ("receitaId", "ingredNome", "quantidade") 
                VALUES (%s, %s, %s)
            """, (receita_id, ingrediente['nome'], quantidade))

        conn.commit()
        return jsonify({"message": "Receita criada com sucesso!", "id": receita_id}), 201

    except psycopg2.Error as e:
        conn.rollback()
        return jsonify({"message": "Erro ao criar receita", "error": str(e)}), 500

    finally:
        cursor.close()
        conn.close()


@app.route("/receitas/<int:id>", methods=["PUT"])
def update_receita(id):
    data = request.get_json()
    usuario_username = data.get('usuarioUsername', 'admin')  # Define 'admin' como padrão se o usuário não for fornecido
    conn = connect_db()
    cursor = conn.cursor()

    try:
        # Verifica se todos os campos obrigatórios foram fornecidos
        if not all(key in data for key in ('nome', 'modoPreparo', 'ingredientes')):
            return jsonify({"message": "Campos obrigatórios faltando"}), 400

        # Atualiza a receita
        cursor.execute("""
            UPDATE "Receita" SET nome=%s, nota=%s, "modoPreparo"=%s WHERE id=%s
        """, (data['nome'], 1, data['modoPreparo'], id))

        # Remove os ingredientes atuais da receita
        cursor.execute('DELETE FROM "Contem" WHERE "receitaId"=%s', (id,))

        # Adiciona os novos ingredientes
        for ingrediente in data['ingredientes']:
            nome_ingrediente = ingrediente.get('nome')
            quantidade = ingrediente.get('quantidade', '1')  # Define 1 como padrão

            if nome_ingrediente:

                
                # Insere a relação na tabela `Contem`
                cursor.execute("""
                    INSERT INTO "Contem" ("receitaId", "ingredNome", quantidade) 
                    VALUES (%s, %s, %s)
                """, (id, nome_ingrediente, quantidade))

        conn.commit()
        return jsonify({"message": "Receita atualizada com sucesso!"}), 200

    except psycopg2.Error as e:
        conn.rollback()
        return jsonify({"message": "Erro ao atualizar receita", "error": str(e)}), 500

    finally:
        cursor.close()
        conn.close()

        

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

@app.route("/ingredientes/<string:name>", methods=["PUT"])
def update_ingrediente_com_tags(name):
    data = request.get_json()
    usuario_username = data.get('usuarioUsername', 'admin')
    tags = data.get('tags', [])  # Lista de tags associadas

    conn = connect_db()
    cursor = conn.cursor()

    try:
        # Verificar se todas as tags existem
        cursor.execute("SELECT nome FROM \"Tag\" WHERE nome IN %s", (tuple(tags),))
        existing_tags = cursor.fetchall()
        existing_tags = [tag[0] for tag in existing_tags]

        # Verificar se todas as tags fornecidas existem no banco de dados
        missing_tags = [tag for tag in tags if tag not in existing_tags]
        if missing_tags:
            return jsonify({"error": f"As seguintes tags não existem: {', '.join(missing_tags)}"}), 400

        # Atualizar o ingrediente
        cursor.execute("""
            UPDATE "Ingrediente" 
            SET "nome"=%s, "icone"=NULL, "usuarioUsername"=%s 
            WHERE "nome"=%s
        """, (data['name'], usuario_username, name))

        # Remover as tags atuais associadas ao ingrediente
        cursor.execute("""
            DELETE FROM "Classifica" WHERE "ingredNome"=%s
        """, (name,))

        # Adicionar as novas tags associadas ao ingrediente
        for tag in tags:
            cursor.execute("""
                INSERT INTO "Classifica" ("ingredNome", "tagNome", quantidade)
                VALUES (%s, %s, '1')
            """, (data['name'], tag))

        conn.commit()
        return jsonify({"message": "Ingrediente atualizado com sucesso!"}), 200

    except Exception as e:
        conn.rollback()
        return jsonify({"message": "Erro ao atualizar ingrediente", "error": str(e)}), 500

    finally:
        cursor.close()
        conn.close()

# Criar um novo ingrediente com tags associadas
@app.route("/ingredientes", methods=["POST"])
def create_ingrediente_com_tags():
    data = request.get_json()
    nome = data.get('name')
    tags = data.get('tags', [])  # Lista de tags associadas
    usuario_username = data.get('usuarioUsername', 'admin')

    if not nome:
        return jsonify({"error": "O nome do ingrediente é obrigatório"}), 400

    conn = connect_db()
    cursor = conn.cursor()

    try:
        # Verificar se todas as tags existem
        cursor.execute("SELECT nome FROM \"Tag\" WHERE nome IN %s", (tuple(tags),))
        existing_tags = cursor.fetchall()
        existing_tags = [tag[0] for tag in existing_tags]

        # Verificar se todas as tags fornecidas existem no banco de dados
        missing_tags = [tag for tag in tags if tag not in existing_tags]
        if missing_tags:
            return jsonify({"error": f"As seguintes tags não existem: {', '.join(missing_tags)}"}), 400

        # Inserir o novo ingrediente
        cursor.execute("""
            INSERT INTO "Ingrediente" (nome, "icone", "receitaId", "usuarioUsername", "quantidade") 
            VALUES (%s, NULL, NULL, %s, '1')
            ON CONFLICT (nome) DO NOTHING
        """, (nome, usuario_username))

        # Adicionar as tags associadas ao ingrediente
        for tag in tags:
            cursor.execute("""
                INSERT INTO "Classifica" ("ingredNome", "tagNome", quantidade)
                VALUES (%s, %s, '1')
            """, (nome, tag))

        conn.commit()
        return jsonify({"message": "Ingrediente criado com sucesso!"}), 201

    except Exception as e:
        conn.rollback()
        return jsonify({"message": "Erro ao criar ingrediente", "error": str(e)}), 500

    finally:
        cursor.close()
        conn.close()
        
# Endpoint para excluir um ingrediente
@app.route("/ingredientes/<string:name>", methods=["DELETE"])
def delete_ingrediente(name):
    conn = connect_db()
    cursor = conn.cursor()

    try:
        # Deletar as relações na tabela Classifica
        cursor.execute('DELETE FROM "Classifica" WHERE "ingredNome"=%s', (name,))

        # Deletar o ingrediente
        cursor.execute('DELETE FROM "Ingrediente" WHERE nome=%s', (name,))

        conn.commit()
        return jsonify({"message": "Ingrediente excluído com sucesso!"}), 200

    except Exception as e:
        conn.rollback()
        return jsonify({"message": "Erro ao excluir ingrediente", "error": str(e)}), 500

    finally:
        cursor.close()
        conn.close()
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

    try:
        # Deletar todas as entradas na tabela Classifica relacionadas à tag
        cursor.execute('DELETE FROM "Classifica" WHERE "tagNome"=%s', (nome,))
        
        # Deletar a tag
        cursor.execute('DELETE FROM "Tag" WHERE nome=%s', (nome,))
        
        conn.commit()
        return jsonify({"message": "Tag e suas classificações foram excluídas com sucesso!"}), 200
    except Exception as e:
        conn.rollback()
        return jsonify({"message": "Erro ao excluir a tag", "error": str(e)}), 500
    finally:
        cursor.close()
        conn.close()

@app.route("/classifica", methods=["POST"])
def create_classifica():
    data = request.get_json()
    conn = connect_db()
    cursor = conn.cursor()

    try:
        cursor.execute("""
            INSERT INTO "Classifica" ("ingredNome", "tagNome", quantidade)
            VALUES (%s, %s, %s)
            ON CONFLICT ("ingredNome", "tagNome") DO UPDATE
            SET quantidade = EXCLUDED.quantidade
        """, (data['ingredNome'], data['tagNome'], data['quantidade']))

        conn.commit()
        return jsonify({"message": "Classificação criada/atualizada com sucesso!"}), 201

    except Exception as e:
        conn.rollback()
        return jsonify({"message": "Erro ao criar/atualizar classificação", "error": str(e)}), 500

    finally:
        cursor.close()
        conn.close()

@app.route("/classifica", methods=["GET"])
def get_classifica():
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute('SELECT "ingredNome", "tagNome", quantidade FROM "Classifica"')
    classifica = cursor.fetchall()
    cursor.close()
    conn.close()

    classifica_list = [{'ingredNome': item[0], 'tagNome': item[1], 'quantidade': item[2]} for item in classifica]
    return jsonify(classifica_list)

@app.route("/ingredientes_com_tags", methods=["GET"])
def get_ingredientes_com_tags():
    conn = connect_db()
    cursor = conn.cursor()
    
    # Consulta que une Ingredientes com as Tags
    cursor.execute("""
        SELECT i.nome, array_agg(t.nome) as tags
        FROM "Ingrediente" i
        LEFT JOIN "Classifica" c ON i.nome = c."ingredNome"
        LEFT JOIN "Tag" t ON c."tagNome" = t.nome
        GROUP BY i.nome
    """)
    
    ingredientes = cursor.fetchall()
    cursor.close()
    conn.close()

    # Mapeando os resultados para um formato adequado para o front-end
    ingredientes_list = [{'name': ing[0], 'tags': ing[1] if ing[1] else []} for ing in ingredientes]
    return jsonify(ingredientes_list)


if __name__ == '__main__':
    app.run(debug=True)
