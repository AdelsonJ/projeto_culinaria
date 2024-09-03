import React from 'react';
import styles_tags from "../tags.module.css";

interface TagFormProps {
    tagDetails: { name: string; description: string; color: string };  // Adiciona o campo de cor
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleUpdate: (e: React.MouseEvent<HTMLButtonElement>) => void;     
    handleDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const TagForm: React.FC<TagFormProps> = ({
    tagDetails,
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
                value={tagDetails.name}
                onChange={handleInputChange}
            />
            <br />
            <label htmlFor="description">Descrição:</label>
            <br />
            <textarea
                id="description"
                name="description"
                value={tagDetails.description}
                onChange={handleInputChange}
            />
            <br />
            <label htmlFor="color">Cor:</label>  {/* Adiciona a seleção de cor */}
            <br />
            <input
                type="color"
                id="color"
                name="color"
                value={tagDetails.color}
                onChange={handleInputChange}
            />
            <br />
            <br />
            <button className={styles_tags.button} type="submit" onClick={handleUpdate}>
                Atualizar
            </button>
            <button className={styles_tags.button} type="button" onClick={handleDelete}>
                Excluir
            </button>
        </>
    );
};

export default TagForm;
