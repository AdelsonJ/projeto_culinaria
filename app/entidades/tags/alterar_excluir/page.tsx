"use client";
import { useState, useEffect } from "react";
import styles from "../../../page.module.css";
import styles_tags from "../tags.module.css";
import TagSelect from "./campoFormulario";
import TagForm from "./formulario";
import { useRouter } from "next/navigation";

interface Tag {
    name: string;
    description: string;
    color: string;
}

export default function TagsAlterarExcluir() {
    const [tags, setTags] = useState<Tag[]>([]);
    const [selectedTag, setSelectedTag] = useState<string>("");
    const [tagDetails, setTagDetails] = useState<Tag>({ name: "", description: "", color: "" });

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
                console.error("Erro ao buscar tags:", error);
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

        try {
            const response = await fetch(`http://localhost:5000/tags/${selectedTag}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...tagDetails, usuarioUsername: 'admin' }),
            });
            if (!response.ok) {
                throw new Error(`Erro na resposta: ${response.statusText}`);
            }
            alert('Tag atualizada com sucesso!');
            router.push('/entidades/tags');
        } catch (error) {
            console.error("Erro ao atualizar tag:", error);
        }
    };

    const handleDelete = async () => {
        if (!selectedTag) {
            alert("Selecione uma tag para excluir.");
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/tags/${selectedTag}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error(`Erro na resposta: ${response.statusText}`);
            }
            alert('Tag excluída com sucesso!');
            setTags(tags.filter(tag => tag.name !== selectedTag));
            setSelectedTag("");
            setTagDetails({ name: "", description: "", color: "" });

            router.push('/entidades/tags');
        } catch (error) {
            console.error("Erro ao excluir tag:", error);
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
