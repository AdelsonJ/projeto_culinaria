"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PrismaClient } from '@prisma/client';
import styles from "../receitas.module.css";

const prisma = new PrismaClient();

export default function CadastrarReceita() {
    const [nome, setNome] = useState('');
    const [nota, setNota] = useState(1);
    const [modoPreparo, setModoPreparo] = useState('');
    const [ingredientesDisponiveis, setIngredientesDisponiveis] = useState([]);
    const [ingredientesSelecionados, setIngredientesSelecionados] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [receitas, setReceitas] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const router = useRouter();

    useEffect(() => {
        async function fetchIngredientes() {
            const response = await fetch('/api/ingrediente');
            const data = await response.json();
            setIngredientesDisponiveis(data);
        }

        async function fetchReceitas() {
            const response = await fetch('/api/receitas');
            const data = await response.json();
            setReceitas(data);
        }

        fetchIngredientes();
        fetchReceitas();
    }, []);

    const handleIngredientSelect = (ingrediente) => {
        setIngredientesSelecionados((prev) => [...prev, ingrediente]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const receita = {
            nome,
            data_pub: new Date(),
            nota,
            usuarioUsername: 'admin',
            modoPreparo,
            ingredientes: ingredientesSelecionados.map(i => ({ nome: i.nome, quantidade: i.quantidade }))
        };

        const method = editingId ? 'PUT' : 'POST';
        const url = editingId ? `/api/receitas/${editingId}` : '/api/receitas';

        const response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(receita),
        });

        if (response.ok) {
            router.push('/receitas');
        } else {
            console.error('Erro ao cadastrar ou alterar a receita');
        }
    };

    const handleDelete = async (id) => {
        const response = await fetch(`/api/receitas/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            setReceitas(receitas.filter((receita) => receita.id !== id));
        } else {
            console.error('Erro ao excluir a receita');
        }
    };

    const handleEdit = (receita) => {
        setNome(receita.nome);
        setNota(receita.nota);
        setModoPreparo(receita.modoPreparo);
        setIngredientesSelecionados(receita.Contems.map((contem) => ({
            nome: contem.Ingrediente.nome,
            quantidade: contem.quantidade
        })));
        setEditingId(receita.id);
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

                <button type="submit">{editingId ? 'Alterar Receita' : 'Cadastrar Receita'}</button>
            </form>

            <h2>Receitas Existentes</h2>
            <ul>
                {receitas.map((receita) => (
                    <li key={receita.id}>
                        {receita.nome}
                        <button onClick={() => handleEdit(receita)}>Alterar</button>
                        <button onClick={() => handleDelete(receita.id)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
