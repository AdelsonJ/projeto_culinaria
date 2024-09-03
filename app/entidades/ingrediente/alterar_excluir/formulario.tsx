import React, { useState, useEffect } from 'react';
import styles_ingredientes from "../ingrediente.module.css";

interface IngredienteFormProps {
    ingredienteDetails: { name: string; tags: string; };
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleUpdate: (e: React.MouseEvent<HTMLButtonElement>) => void;
    handleDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface Tag {
    name: string;
    description: string;
}

const IngredienteForm: React.FC<IngredienteFormProps> = ({
    ingredienteDetails,
    handleInputChange,
    handleUpdate,
    handleDelete
}) => {
    const [tags, setTags] = useState<Tag[]>([]);

    useEffect(() => {
        const fetchTags = async () => {
            try {
                const response = await fetch('http://localhost:5000/tags');
                const data = await response.json();
                setTags(data);
            } catch (error) {
                console.error("Erro ao buscar tags:", error);
            }
        };
        fetchTags();
    }, []);

    return (
        <>
            <label htmlFor="name">Nome:</label>
            <br />
            <input
                type="text"
                id="name"
                name="name"
                value={ingredienteDetails.name}
                onChange={handleInputChange}
            />
            <br />
            <label htmlFor="tags">Tags:</label>
            <br />
            <select
                id="tags"
                name="tags"
                value={ingredienteDetails.tags}
                onChange={handleInputChange}
            >
                <option value="">Selecione uma tag</option>
                {tags.map(tag => (
                    <option key={tag.name} value={tag.name}>
                        {tag.name} - {tag.description}
                    </option>
                ))}
            </select>
            <br />
            <br />
            <button className={styles_ingredientes.button} type="submit" onClick={handleUpdate}>
                Atualizar
            </button>
            <button className={styles_ingredientes.button} type="button" onClick={handleDelete}>
                Excluir
            </button>
        </>
    );
};

export default IngredienteForm;
