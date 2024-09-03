"use client";
import { useState, useEffect } from "react";
import styles from "../../../page.module.css";
import styles_ingredientes from "../ingrediente.module.css";
import IngredienteSelect from "./campoFormulario";
import IngredienteForm from "./formulario";
import { useRouter } from "next/navigation";

interface Ingrediente {
    name: string;
    tags: string[];  // Lista de tags associadas
}

export default function IngredientesAlterarExcluir() {
    const [ingredientes, setIngredientes] = useState<Ingrediente[]>([]);
    const [selectedIngrediente, setSelectedIngrediente] = useState<string>("");
    const [ingredienteDetails, setIngredienteDetails] = useState<Ingrediente>({ name: "", tags: [] });

    const router = useRouter();

    useEffect(() => {
        const fetchIngredientes = async () => {
            try {
                const response = await fetch('http://localhost:5000/ingredientes_com_tags');
                if (!response.ok) {
                    throw new Error(`Erro na resposta: ${response.statusText}`);
                }
                const data: Ingrediente[] = await response.json();
                data.sort((a, b) => a.name.localeCompare(b.name));
                setIngredientes(data);
            } catch (error) {
                console.error("Erro ao buscar ingredientes:", error);
            }
        };
        fetchIngredientes();
    }, []);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedIngrediente = e.target.value;
        setSelectedIngrediente(selectedIngrediente);
        const ingrediente = ingredientes.find(ingrediente => ingrediente.name === selectedIngrediente);
        if (ingrediente) {
            setIngredienteDetails(ingrediente);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name === 'tags') {
            const tagsArray = value.split(',').map(tag => tag.trim());
            setIngredienteDetails({
                ...ingredienteDetails,
                tags: tagsArray,
            });
        } else {
            setIngredienteDetails({
                ...ingredienteDetails,
                [name]: value,
            });
        }
    };

    const handleUpdate = async () => {
        if (!selectedIngrediente) {
            alert("Selecione um ingrediente para editar.");
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/ingredientes/${selectedIngrediente}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...ingredienteDetails, usuarioUsername: 'admin' }),
            });
            if (!response.ok) {
                throw new Error(`Erro na resposta: ${response.statusText}`);
            }
            alert('Ingrediente atualizado com sucesso!');
            router.push('/entidades/ingrediente');
        } catch (error) {
            console.error("Erro ao atualizar ingrediente:", error);
        }
    };

    const handleDelete = async () => {
        if (!selectedIngrediente) {
            alert("Selecione um ingrediente para excluir.");
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/ingredientes/${selectedIngrediente}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error(`Erro na resposta: ${response.statusText}`);
            }
            alert('Ingrediente excluído com sucesso!');
            setIngredientes(ingredientes.filter(ingrediente => ingrediente.name !== selectedIngrediente));
            setSelectedIngrediente("");
            setIngredienteDetails({ name: "", tags: [] });

            router.push('/entidades/ingrediente');
        } catch (error) {
            console.error("Erro ao excluir ingrediente:", error);
        }
    };

    return (
        <main>
            <section id="gallery" className={styles.gallery}>
                <div className={styles.container}>
                    <h2>Excluir ou Editar Ingredientes</h2>
                    <div className={styles_ingredientes.ingredientes_container}>
                        <IngredienteSelect
                            ingredientes={ingredientes}
                            selectedIngrediente={selectedIngrediente}
                            handleSelectChange={handleSelectChange}
                        />
                        {selectedIngrediente && (
                            <IngredienteForm
                                ingredienteDetails={ingredienteDetails}
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