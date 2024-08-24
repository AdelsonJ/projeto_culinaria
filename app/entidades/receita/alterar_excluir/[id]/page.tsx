"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import styles from "../../receitas.module.css";

export default function AlterarExcluirReceita() {
  const [nome, setNome] = useState('');
  const [nota, setNota] = useState(1);
  const [modoPreparo, setModoPreparo] = useState('');
  const [ingredientesDisponiveis, setIngredientesDisponiveis] = useState([]);
  const [ingredientesSelecionados, setIngredientesSelecionados] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    fetchReceita(id);
    fetchIngredientes();
  }, [id]);

  const fetchReceita = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/receitas/${id}`);
      const receita = response.data;
      setNome(receita.nome);
      setNota(receita.nota);
      setModoPreparo(receita.modoPreparo);
      setIngredientesSelecionados(receita.ingredientes);
    } catch (error) {
      console.error("Erro ao buscar receita:", error);
    }
  };

  const fetchIngredientes = async () => {
    try {
      const response = await axios.get("http://localhost:5000/ingredientes");
      setIngredientesDisponiveis(response.data);
    } catch (error) {
      console.error("Erro ao buscar ingredientes:", error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const receitaAtualizada = {
      nome,
      nota,
      modoPreparo,
      ingredientes: ingredientesSelecionados.map(i => ({ nome: i.nome, quantidade: i.quantidade }))
    };

    try {
      await axios.put(`http://localhost:5000/receitas/${id}`, receitaAtualizada);
      router.push('/entidades/receita');
    } catch (error) {
      console.error('Erro ao atualizar a receita', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/receitas/${id}`);
      router.push('/entidades/receita');
    } catch (error) {
      console.error('Erro ao excluir a receita', error);
    }
  };

  const handleIngredientSelect = (ingrediente) => {
    setIngredientesSelecionados((prev) => [...prev, ingrediente]);
  };

  return (
    <form onSubmit={handleUpdate} className={styles.form}>
      <h1>Alterar/Excluir Receita</h1>

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
        Nota:
        <select value={nota} onChange={(e) => setNota(Number(e.target.value))}>
          {[1, 2, 3, 4, 5].map(n => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
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
          {ingredientesDisponiveis.map((ingrediente, index) => (
            <div 
              key={index} 
              onClick={() => handleIngredientSelect(ingrediente)}
              className={styles.ingredientItem}
            >
              {ingrediente.name}
            </div>
          ))}
        </div>
      </label>

      <div className={styles.selectedIngredients}>
        <h3>Ingredientes Selecionados:</h3>
        <ul>
          {ingredientesSelecionados.map((ingrediente, index) => (
            <li key={index}>{ingrediente.nome}</li>
          ))}
        </ul>
      </div>

      <button type="submit">Salvar Alterações</button>
      <button type="button" onClick={handleDelete} className={styles.deleteButton}>Excluir Receita</button>
    </form>
  );
}
