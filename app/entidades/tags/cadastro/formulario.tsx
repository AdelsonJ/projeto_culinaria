import React from 'react';
import FormField from './campoFormulario';
import styles_tags from "../tags.module.css";

type FormDataType = {
    name: string;
    description: string;
    color: string;
};

interface FormProps {
    formData: FormDataType;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Form({ formData, handleChange, handleSubmit }: FormProps) {
    const colorOptions = [
        { value: 'red', label: 'Vermelho' },
        { value: 'green', label: 'Verde' },
        { value: 'blue', label: 'Azul' },
        { value: 'yellow', label: 'Amarelo' },
        { value: 'purple', label: 'Roxo' },
    ];

    return (
        <form onSubmit={handleSubmit}>
            <FormField
                label="Nome"
                type="text"
                name="name"
                value={formData.name}
                handleChange={handleChange}
            />
            <FormField
                label="Descrição"
                type="text"
                name="description"
                value={formData.description}
                handleChange={handleChange}
            />
            <FormField
                label="Cor"
                type="select"
                name="color"
                value={formData.color}
                handleChange={handleChange}
                options={colorOptions}
            />

            <button className={styles_tags.button} type="submit">
                Confirmar
            </button>
        </form>
    );
}
