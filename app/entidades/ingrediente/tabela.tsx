"use client";

import { useEffect, useState } from "react";
import styles from "./ingrediente.module.css"; 

interface Ingrediente {
    name: string;
    tags: string[];  // Adiciona um array de strings para as tags
}

export default function DataTable() {
    const [data, setData] = useState<Ingrediente[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:5000/ingredientes_com_tags'); // Supondo que o endpoint foi atualizado
                if (!response.ok) {
                    throw new Error(`Erro na resposta: ${response.statusText}`);
                }
                const result: Ingrediente[] = await response.json();
                setData(result);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError("Erro desconhecido");
                }
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>Erro: {error}</p>;
    }

    return (
        <div className={styles.tableContainer}>
            <h2>Lista de Ingredientes</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Tags</th>  {/* Nova coluna para as tags */}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.tags.join(', ')}</td>  {/* Exibe as tags separadas por vírgulas */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
