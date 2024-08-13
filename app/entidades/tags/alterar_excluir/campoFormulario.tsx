import React from 'react';

interface TagSelectProps {
    tags: { name: string; description: string }[];
    selectedTag: string;
    handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const TagSelect: React.FC<TagSelectProps> = ({ tags, selectedTag, handleSelectChange }) => {
    return (
        <>
            <label htmlFor="tags">Selecione uma Tag:</label>
            <br />
            <select
                id="tags"
                name="tags"
                value={selectedTag}
                onChange={handleSelectChange}
            >
                <option value="">Selecione uma tag</option>
                {tags.map((tag) => (
                    <option key={tag.name} value={tag.name}>
                        {tag.name}
                    </option>
                ))}
            </select>
            <br />
            <br />
        </>
    );
};

export default TagSelect;
