
import React, { useState } from 'react';
import styles_ingredientes from "../ingrediente.module.css";
import FormField from './campoFormulario';

type FormDataType = {
    name: string;
};

interface FormProps {
    formData: FormDataType;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Form({ formData, handleChange, handleSubmit }: FormProps) {
    const [showModal, setShowModal] = useState(false);

    return (
        <form onSubmit={handleSubmit}>
            <FormField
                label="Nome"
                type="text"
                name="name"
                value={formData.name}
                handleChange={handleChange}
            />

            <button className={styles_ingredientes.button} type="submit">
                Confirmar
            </button>
        </form>
    );
}
