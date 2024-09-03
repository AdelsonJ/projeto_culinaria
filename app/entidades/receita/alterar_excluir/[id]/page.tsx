"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import styles from "../receitas.module.css";

export default function AlterarReceita() {
  const [nome, setNome] = useState('');
  const [modoPreparo, setModoPreparo] = useState('');
  const [ingredientesDisponiveis, setIngredientesDisponiveis] = useState([]);
  const [ingredientesSelecionados, setIngredientesSelecionados] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingId, setEditingId] = useState(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get("edit");

  useEffect(() => {
    fetchIngredientes();
    if (editId) {
      fetchReceita(editId);
      setEditingId(editId);
    }
  }, [editId]);

  const fetchIngredientes = async () => {
    try {
      const response = await axios.get("http://localhost:5000/ingredientes");
      setIngredientesDisponiveis(response.data);
    } catch (error) {
      console.error("Erro ao buscar ingredientes:", error);
    }
  };

  const fetchReceita = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/receitas/${id}`);
      const receita = response.data;
      setNome(receita.nome);
      setModoPreparo(receita.modoPreparo);
      // Mapeia os ingredientes para garantir que sejam exibidos corretamente
      setIngredientesSelecionados(receita.ingredientes.map(ing => ({
        name: ing.nome,  // Garante que a propriedade 'name' seja usada
        quantidade: ing.quantidade
      })));
    } catch (error) {
      console.error("Erro ao buscar receita:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const receita = {
      nome,
      modoPreparo,
      usuarioUsername: 'admin',
      ingredientes: ingredientesSelecionados.map(i => ({
        nome: i.name,
        quantidade: i.quantidade
      }))
    };

    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/receitas/${editingId}`, receita);
      } else {
        await axios.post("http://localhost:5000/receitas", receita);
      }
      alert("Receita alterada com sucesso!");
      router.push('/entidades/receita');
    } catch (error) {
      console.error('Erro ao cadastrar ou alterar a receita', error);
    }
  };

  const handleIngredientSelect = (ingrediente) => {
    const quantidade = prompt(`Informe a quantidade para o ingrediente "${ingrediente.name}":`, '1 unidade');
    if (quantidade) {
      const ingredienteComQuantidade = {
        ...ingrediente,
        quantidade
      };
      setIngredientesSelecionados((prev) => [...prev, ingredienteComQuantidade]);
    }
  };

  const handleRemoveIngredient = (name) => {
    setIngredientesSelecionados((prev) => prev.filter(ing => ing.name !== name));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>{editingId ? 'Alterar Receita' : 'Cadastrar Nova Receita'}</h1>

        <label>
          Nome da Receita:
          <input 
            type="text" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
            required 
          />
        </label>

        <label>
          Modo de Preparo:
          <textarea 
            value={modoPreparo} 
            onChange={(e) => setModoPreparo(e.target.value)} 
            required 
          />
        </label>

        <label>
          Ingredientes:
          <input 
            type="text" 
            placeholder="Pesquisar Ingredientes"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className={styles.ingredientBox}>
            {ingredientesDisponiveis
              .filter(ing => ing.name.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((ingrediente, index) => (
                <div 
                  key={index} 
                  onClick={() => handleIngredientSelect(ingrediente)}
                  className={styles.ingredientItem}
                >
                  {ingrediente.name}
                </div>
              ))
            }
          </div>
        </label>

        <div className={styles.selectedIngredients}>
          <h3>Ingredientes Selecionados:</h3>
          <ul>
            {ingredientesSelecionados.map((ingrediente, index) => (
              <li key={index}>
                {ingrediente.name} - {ingrediente.quantidade}
                <button type="button" onClick={() => handleRemoveIngredient(ingrediente.name)}>Remover</button>
              </li>
            ))}
          </ul>
        </div>

        <button type="submit">{editingId ? 'Alterar Receita' : 'Cadastrar Receita'}</button>
      </form>
    </div>
  );
}
