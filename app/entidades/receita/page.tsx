"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import styles from "./receitas.module.css";

interface Receita {
  id: number;
  nome: string;
}

export default function TabelaReceitas() {
  const [receitas, setReceitas] = useState<Receita[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchReceitas();
  }, []);

  const fetchReceitas = async () => {
    try {
      const response = await axios.get("http://localhost:5000/receitas");
      setReceitas(response.data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Erro desconhecido");
      }
    } finally {
      setLoading(false);
    }
  };

  const excluirReceita = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5000/receitas/${id}`);
      fetchReceitas(); // Atualiza a lista após a exclusão
    } catch (error) {
      console.error("Erro ao excluir receita:", error);
    }
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <div className={styles.tableContainer}>
      <h2>Lista de Receitas</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {receitas.map((receita) => (
            <tr key={receita.id}>
              <td>{receita.nome}</td>
              <td>
                <Link href={`/entidades/receita/cadastro?edit=${receita.id}`}>
                  <button>Alterar</button>
                </Link>
                <button onClick={() => excluirReceita(receita.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link href="/entidades/receita/cadastro">
        <button className={styles.addButton}>Cadastrar Nova Receita</button>
      </Link>
    </div>
  );
}
