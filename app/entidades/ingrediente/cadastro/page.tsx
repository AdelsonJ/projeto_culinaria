"use client";
import { useState } from "react";
import styles from "../../../page.module.css";
import styles_ingredientes from "../ingrediente.module.css";
import Form from './formulario';
import { useRouter } from "next/navigation";

type FormDataType = {
    name: string;
    tags: string[];  // Lista de tags associadas
};

export default function IngredientesCadastro() {
    const [formData, setFormData] = useState<FormDataType>({
        name: "",
        tags: [],
    });

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name === 'tags') {
            const tagsArray = value.split(',').map(tag => tag.trim());
            setFormData(prevState => ({
                ...prevState,
                tags: tagsArray,
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Formulário enviado');

        try {
            const response = await fetch('http://localhost:5000/ingredientes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, usuarioUsername: 'admin' }),
            });
            if (!response.ok) {
                throw new Error(`Erro na resposta: ${response.statusText}`);
            }
            alert('Ingrediente cadastrado com sucesso!');
            setFormData({
                name: "",
                tags: [],
            });
            
            router.push('/entidades/ingrediente');
        } catch (error) {
            console.error("Erro ao cadastrar ingrediente:", error);
        }
    };

    return (
        <main>
            <section id="gallery" className={styles.gallery}>
                <div className={styles.container}>
                    <h2>Cadastrar Ingredientes</h2>
                    <div className={styles_ingredientes.container}>
                        <Form
                            formData={formData}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}