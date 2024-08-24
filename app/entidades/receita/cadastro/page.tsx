"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import styles from "../receitas.module.css";

export default function CadastrarReceita() {
  const [nome, setNome] = useState('');
  const [nota, setNota] = useState(1);
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
      console.log("Ingredientes recebidos:", response.data);
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
      setNota(receita.nota);
      setModoPreparo(receita.modoPreparo);
      setIngredientesSelecionados(receita.ingredientes);
    } catch (error) {
      console.error("Erro ao buscar receita:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const receita = {
      nome,
      data_pub: new Date().toISOString(),
      nota,
      usuarioUsername: 'admin',
      modoPreparo,
      ingredientes: ingredientesSelecionados.map(i => ({ nome: i.nome, quantidade: i.quantidade }))
    };

    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/receitas/${editingId}`, receita);
      } else {
        await axios.post("http://localhost:5000/receitas", receita);
      }
      router.push('/entidades/receita');
    } catch (error) {
      console.error('Erro ao cadastrar ou alterar a receita', error);
    }
  };

  const handleIngredientSelect = (ingrediente) => {
    setIngredientesSelecionados((prev) => [...prev, ingrediente]);
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
              <li key={index}>{ingrediente.nome}</li>
            ))}
          </ul>
        </div>

        <button type="submit">{editingId ? 'Alterar Receita' : 'Cadastrar Receita'}</button>
      </form>
    </div>
  );
}
