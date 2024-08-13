"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./ingrediente.module.css"; 

interface ingrediente {
    name: string;
    icon: string;
}

export default function DataTable() {
    const [data, setData] = useState<ingrediente[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/json/ingredientes.json');
                if (!response.ok) {
                    throw new Error(`Erro na resposta: ${response.statusText}`);
                }
                const result: ingrediente[] = await response.json();
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
            <h2>Dados das ingredientes</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Icone</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                        <td>{item.name}</td>
                        <td>
                            <Image 
                            src={item.icon} 
                            alt={item.name} 
                            width={50} 
                            height={50} 
                            objectFit="cover" 
                            />
                        </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
