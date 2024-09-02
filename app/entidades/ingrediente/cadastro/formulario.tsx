import React, { useState, useEffect } from 'react';
import styles_ingredientes from "../ingrediente.module.css";
import FormField from './campoFormulario';

type FormDataType = {
    name: string;
    tags: string;
};

interface Tag {
    name: string;
    description: string;
}

interface FormProps {
    formData: FormDataType;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Form({ formData, handleChange, handleSubmit }: FormProps) {
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
        <form onSubmit={handleSubmit}>
            <FormField
                label="Nome"
                type="text"
                name="name"
                value={formData.name}
                handleChange={handleChange}
            />

            <label htmlFor="tags">Tags:</label>
            <select
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
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

            <button className={styles_ingredientes.button} type="submit">
                Confirmar
            </button>
        </form>
    );
}
