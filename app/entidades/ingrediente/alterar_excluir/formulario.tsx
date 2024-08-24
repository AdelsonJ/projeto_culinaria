import React from 'react';
import styles_ingredientes from "../ingrediente.module.css";

interface IngredienteFormProps {
    ingredienteDetails: { name: string };
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleUpdate: (e: React.MouseEvent<HTMLButtonElement>) => void;     
    handleDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const IngredienteForm: React.FC<IngredienteFormProps> = ({
    ingredienteDetails,
    handleInputChange,
    handleUpdate,
    handleDelete
}) => {
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
