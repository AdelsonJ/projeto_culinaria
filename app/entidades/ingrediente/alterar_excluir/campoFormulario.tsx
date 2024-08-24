import React from 'react';

interface IngredienteSelectProps {
    ingredientes: { name: string }[];
    selectedIngrediente: string;
    handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const IngredienteSelect: React.FC<IngredienteSelectProps> = ({ ingredientes, selectedIngrediente, handleSelectChange }) => {
    return (
        <>
            <label htmlFor="ingredientes">Selecione um Ingrediente:</label>
            <br />
            <select
                id="ingredientes"
                name="ingredientes"
                value={selectedIngrediente}
                onChange={handleSelectChange}
            >
                <option value="">Selecione um ingrediente</option>
                {ingredientes.map((ingrediente) => (
                    <option key={ingrediente.name} value={ingrediente.name}>
                        {ingrediente.name}
                    </option>
                ))}
            </select>
            <br />
            <br />
        </>
    );
};

export default IngredienteSelect;
