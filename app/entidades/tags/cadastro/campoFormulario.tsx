import React from 'react';

type OptionType = {
    value: string;
    label: string;
};

interface FormFieldProps {
    label: string;
    type: string;
    name: string;
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    options?: OptionType[]; // Opcional, pois apenas o select usa
}

export default function FormField({ label, type, name, value, handleChange, options = [] }: FormFieldProps) {
    return (
        <>
            <label htmlFor={name}>{label}:</label>
            <br />
            {type === 'select' ? (
                <select id={name} name={name} value={value} onChange={handleChange}>
                    <option value="">Selecione uma cor</option>
                    {options.map((option: OptionType) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                />
            )}
            <br />
            <br />
        </>
    );
}
