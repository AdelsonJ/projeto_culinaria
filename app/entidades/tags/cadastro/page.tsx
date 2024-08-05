"use client";
import { useState } from "react";
import styles from "../../../page.module.css";
import styles_tags from "../tags.module.css";

export default function TagsCadastro() {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        color: "" // Adiciona o campo de cor
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('Formulário enviado'); // Verifica se a função está sendo chamada

        // Cria um novo objeto com os dados do formulário
        const newData = formData;
        console.log('Novo dado:', newData); // Verifica os dados do formulário

        // Busca o arquivo JSON existente do servidor
        let existingData = [];

        try {
            const response = await fetch('http://localhost:5000/tags'); // Atualize para o endereço do seu servidor
            if (!response.ok) {
                throw new Error(`Erro na resposta: ${response.statusText}`);
            }
            existingData = await response.json();
            console.log('Dados existentes:', existingData); // Verifica os dados existentes
        } catch (error) {
            console.error("Erro ao buscar o arquivo JSON:", error);
            return; // Adiciona um return para não continuar se houve erro
        }

        // Adiciona os novos dados
        existingData.push(newData);
        console.log('Dados após inserção:', existingData); // Verifica os dados após inserção

        // Salva o arquivo JSON atualizado no servidor
        const updatedData = JSON.stringify(existingData, null, 2);
        console.log('Dados atualizados:', updatedData); // Verifica os dados JSON atualizados

        try {
            const saveResponse = await fetch('http://localhost:5000/saveTags', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: updatedData,
            });
            if (!saveResponse.ok) {
                throw new Error(`Erro na resposta: ${saveResponse.statusText}`);
            }
            alert('Dados salvos com sucesso!');
        } catch (error) {
            console.error("Erro ao salvar o arquivo JSON:", error);
        }
    };

    return (
        <>
            <main>
                <section id="gallery" className={styles.gallery}>
                    <div className={styles.container}>
                        <h2>Cadastrar Tags</h2>
                        <div className={styles_tags.container}>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="name">Nome:</label>
                                <br />
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <br />
                                <br />
                                <label htmlFor="description">Descrição:</label>
                                <br />
                                <input
                                    type="text"
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                />
                                <br />
                                <br />
                                <label htmlFor="color">Cor:</label>
                                <br />
                                <select
                                    id="color"
                                    name="color"
                                    value={formData.color}
                                    onChange={handleChange}
                                >
                                    <option value="">Selecione uma cor</option>
                                    <option value="red">Vermelho</option>
                                    <option value="green">Verde</option>
                                    <option value="blue">Azul</option>
                                    <option value="yellow">Amarelo</option>
                                    <option value="purple">Roxo</option>
                                    {/* Adicione mais opções conforme necessário */}
                                </select>
                                <br />
                                <br />
                                <button type="submit">Confirmar</button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

