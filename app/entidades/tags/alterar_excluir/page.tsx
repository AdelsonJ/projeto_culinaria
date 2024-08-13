"use client";
import { useState, useEffect } from "react";
import styles from "../../../page.module.css";
import styles_tags from "../tags.module.css";
import TagSelect from "./campoFormulario";
import TagForm from "./formulario";
import { useRouter } from "next/navigation";

// Define a interface for a tag
interface Tag {
    name: string;
    description: string;
}

export default function TagsAlterarExcluir() {
    const [tags, setTags] = useState<Tag[]>([]);
    const [selectedTag, setSelectedTag] = useState<string>("");
    const [tagDetails, setTagDetails] = useState<Tag>({ name: "", description: "" });

    const router = useRouter();

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

    const handleUpdate = async () => {
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
            setTags(updatedTags);
            setSelectedTag("");
            setTagDetails({ name: "", description: "" });
            router.push('/entidades/tags');
        } catch (error) {
            console.error("Erro ao salvar o arquivo JSON:", error);
        }
    };

    const handleDelete = async () => {
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
            setTags(updatedTags);
            setSelectedTag("");
            setTagDetails({ name: "", description: "" });

            router.push('/entidades/tags');
        } catch (error) {
            console.error("Erro ao salvar o arquivo JSON:", error);
        }
    };

    return (
        <main>
            <section id="gallery" className={styles.gallery}>
                <div className={styles.container}>
                    <h2>Excluir ou Editar Tags</h2>
                    <div className={styles_tags.tags_container}>
                        <TagSelect
                            tags={tags}
                            selectedTag={selectedTag}
                            handleSelectChange={handleSelectChange}
                        />
                        {selectedTag && (
                            <TagForm
                                tagDetails={tagDetails}
                                handleInputChange={handleInputChange}
                                handleUpdate={handleUpdate}
                                handleDelete={handleDelete}
                            />
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
