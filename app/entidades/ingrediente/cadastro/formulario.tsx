/* import React from 'react';
import FormField from './campoFormulario';
import styles_ingredientes from "../ingrediente.module.css";

type FormDataType = {
    name: string;
    icon: string;
};

interface FormProps {
    formData: FormDataType;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Form({ formData, handleChange, handleSubmit }: FormProps) {
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
                label="Icone"
                type="text"
                name="icon"
                value={formData.icon}
                handleChange={handleChange}
            />

            <button className={styles_ingredientes.button} type="submit">
                Confirmar
            </button>
        </form>
    );
}
 */
import React, { useState } from 'react';
import styles_ingredientes from "../ingrediente.module.css";
import FormField from './campoFormulario';

type FormDataType = {
    name: string;
    icon: string;
};

interface FormProps {
    formData: FormDataType;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Form({ formData, handleChange, handleSubmit }: FormProps) {
    const [showModal, setShowModal] = useState(false);
    const icons = ["chefe.png", "moqueca.jpg", "coxinha.jpg"]; // Lista de ícones

    const selectIcon = (icon: string) => {
        handleChange({
            target: {
                name: "icon",
                value: `/images/${icon}`  // Prefixo "/images/"
            }
        } as React.ChangeEvent<HTMLInputElement>);
        setShowModal(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormField
                label="Nome"
                type="text"
                name="name"
                value={formData.name}
                handleChange={handleChange}
            />
            
            <label htmlFor="icon">Ícone</label>
            <button type="button" onClick={() => setShowModal(true)}>
                Selecionar Ícone
            </button>
            {formData.icon && (
                <div>
                    Ícone Selecionado: <img src={formData.icon} alt="Icone selecionado" className={styles_ingredientes.preview} />
                </div>
            )}
            
            {showModal && (
                <div className={styles_ingredientes.modal}>
                    <div className={styles_ingredientes.modalContent}>
                        <h3>Selecione um Ícone</h3>
                        <div className={styles_ingredientes.iconList}>
                            {icons.map((icon, index) => (
                                <img 
                                    key={index} 
                                    src={`/images/${icon}`} 
                                    alt={icon} 
                                    onClick={() => selectIcon(icon)} 
                                    className={styles_ingredientes.iconOption}
                                />
                            ))}
                        </div>
                        <button onClick={() => setShowModal(false)}>Cancelar</button>
                    </div>
                </div>
            )}

            <button className={styles_ingredientes.button} type="submit">
                Confirmar
            </button>
        </form>
    );
}
