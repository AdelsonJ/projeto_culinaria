"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PrismaClient } from '@prisma/client';
import styles from "../../receitas.module.css";

const prisma = new PrismaClient();

export default function AlterarExcluirReceita({ params }) {
    const { id } = params;
    const [nome, setNome] = useState('');
    const [nota, setNota] = useState(1);
    const [modoPreparo, setModoPreparo] = useState('');
    const [ingredientesDisponiveis, setIngredientesDisponiveis] = useState([]);
    const [ingredientesSelecionados, setIngredientesSelecionados] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();

    useEffect(() => {
        async function fetchReceita() {
            const response = await fetch(`/api/receitas/${id}`);
            const receita = await response.json();
            setNome(receita.nome);
            setNota(receita.nota);
            setModoPreparo(receita.modoPreparo);
            setIngredientesSelecionados(receita.Contems.map(c => c.Ingrediente));
        }
        fetchReceita();
    }, [id]);

    useEffect(() => {
        async function fetchIngredientes() {
            const response = await fetch('/api/ingredientes');
            const data = await response.json();
            setIngredientesDisponiveis(data);
        }
        fetchIngredientes();
    }, []);

    const handleIngredientSelect = (ingrediente) => {
        setIngredientesSelecionados((prev) => [...prev, ingrediente]);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const receitaAtualizada = {
            nome,
            nota,
            modoPreparo,
            ingredientes: ingredientesSelecionados.map(i => ({ nome: i.nome, quantidade: i.quantidade }))
        };

        const response = await fetch(`/api/receitas/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(receitaAtualizada),
        });

        if (response.ok) {
            router.push('/receitas');
        } else {
            console.error('Erro ao atualizar a receita');
        }
    };

    const handleDelete = async () => {
        const response = await fetch(`/api/receitas/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            router.push('/receitas');
        } else {
            console.error('Erro ao excluir a receita');
        }
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
                    {ingredientesDisponiveis
                        .filter(ing => ing.nome.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map((ingrediente) => (
                            <div 
                                key={ingrediente.id} 
                                onClick={() => handleIngredientSelect(ingrediente)}
                                className={styles.ingredientItem}
                            >
                                {ingrediente.nome}
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

            <button type="submit">Salvar Alterações</button>
            <button type="button" onClick={handleDelete} className={styles.deleteButton}>Excluir Receita</button>
        </form>
    );
}
