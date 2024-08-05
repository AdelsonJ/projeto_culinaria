"use client";
import { useState, useEffect } from "react";
import styles from "../../../page.module.css";
import styles_tags from "../tags.module.css";

// Define a interface for a tag
interface Tag {
    name: string;
    description: string;
}

export default function TagsExclusao() {
    const [tags, setTags] = useState<Tag[]>([]);
    const [selectedTag, setSelectedTag] = useState<string>("");
    const [tagDetails, setTagDetails] = useState<Tag>({ name: "", description: "" });

    useEffect(() => {
        const fetchTags = async () => {
            try {
                const response = await fetch('http://localhost:5000/tags');
                if (!response.ok) {
                    throw new Error(`Erro na resposta: ${response.statusText}`);
                }
                const data: Tag[] = await response.json();
                data.sort((a, b) => a.name.localeCompare(b.name));
                setTags(data);
            } catch (error) {
                console.error("Erro ao buscar o arquivo JSON:", error);
            }
        };
        fetchTags();
    }, []);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedTag = e.target.value;
        setSelectedTag(selectedTag);
        const tag = tags.find(tag => tag.name === selectedTag);
        if (tag) {
            setTagDetails(tag);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setTagDetails({
            ...tagDetails,
            [name]: value,
        });
    };

    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!selectedTag) {
            alert("Selecione uma tag para editar.");
            return;
        }

        const updatedTags = tags.map(tag =>
            tag.name === selectedTag ? tagDetails : tag
        );

        const updatedData = JSON.stringify(updatedTags, null, 2);

        try {
            const saveResponse = await fetch('http://localhost:5000/saveTags', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: updatedData,
            });
            if (!saveResponse.ok) {
                throw new Error(`Erro na resposta: ${saveResponse.statusText}`);
            }
            alert('Tag atualizada com sucesso!');
            setTags(updatedTags); // Atualiza a lista de tags
            setSelectedTag(""); // Reseta a seleção
            setTagDetails({ name: "", description: "" }); // Reseta os detalhes
        } catch (error) {
            console.error("Erro ao salvar o arquivo JSON:", error);
        }
    };

    const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!selectedTag) {
            alert("Selecione uma tag para excluir.");
            return;
        }

        const updatedTags = tags.filter(tag => tag.name !== selectedTag);

        const updatedData = JSON.stringify(updatedTags, null, 2);

        try {
            const saveResponse = await fetch('http://localhost:5000/saveTags', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: updatedData,
            });
            if (!saveResponse.ok) {
                throw new Error(`Erro na resposta: ${saveResponse.statusText}`);
            }
            alert('Tag excluída com sucesso!');
            setTags(updatedTags); // Atualiza a lista de tags
            setSelectedTag(""); // Reseta a seleção
            setTagDetails({ name: "", description: "" }); // Reseta os detalhes
        } catch (error) {
            console.error("Erro ao salvar o arquivo JSON:", error);
        }
    };

    return (
        <>
            <main>
                <section id="gallery" className={styles.gallery}>
                    <div className={styles.container}>
                        <h2>Excluir ou Editar Tags</h2>
                        <div className={styles_tags.container}>
                            <form onSubmit={handleUpdate}>
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
                                {selectedTag && (
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
                                        <br />
                                        <button type="submit">Atualizar</button>
                                        <button type="button" onClick={handleDelete}>Excluir</button>
                                    </>
                                )}
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
