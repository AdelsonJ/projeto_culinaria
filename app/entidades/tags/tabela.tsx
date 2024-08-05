"use client";

import { useEffect, useState } from "react";
import styles from "../../page.module.css"; //

interface Tag {
    name: string;
    description: string;
    color: string;
}

export default function DataTable() {
    const [data, setData] = useState<Tag[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/json/tags.json');
                if (!response.ok) {
                    throw new Error(`Erro na resposta: ${response.statusText}`);
                }
                const result: Tag[] = await response.json();
                setData(result);
            } catch (error) {
                // Verifica se o erro é uma instância de Error e obtém a mensagem
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
            <h2>Dados das Tags</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Cor</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td style={{ backgroundColor: item.color }}>{item.color}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
