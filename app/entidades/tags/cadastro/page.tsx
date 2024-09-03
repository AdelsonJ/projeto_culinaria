"use client";
import { useState } from "react";
import styles from "../../../page.module.css";
import styles_tags from "../tags.module.css";
import Form from './formulario';
import { useRouter } from "next/navigation";

type FormDataType = {
    name: string;
    description: string;
    color: string;
};

export default function TagsCadastro() {
    const [formData, setFormData] = useState<FormDataType>({
        name: "",
        description: "",
        color: ""
    });

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Formulário enviado');

        try {
            const response = await fetch('http://localhost:5000/tags', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, usuarioUsername: 'admin' }),
            });
            if (!response.ok) {
                throw new Error(`Erro na resposta: ${response.statusText}`);
            }
            alert('Tag cadastrada com sucesso!');
            setFormData({
                name: "",
                description: "",
                color: ""
            });
            
            router.push('/entidades/tags');
        } catch (error) {
            console.error("Erro ao cadastrar tag:", error);
        }
    };

    return (
        <main>
            <section id="gallery" className={styles.gallery}>
                <div className={styles.container}>
                    <h2>Cadastrar Tags</h2>
                    <div className={styles_tags.container}>
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
