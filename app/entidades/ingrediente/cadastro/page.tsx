"use client";
import { useState } from "react";
import styles from "../../../page.module.css";
import styles_ingredientes from "../ingrediente.module.css";
import Form from './formulario';
import { useRouter } from "next/navigation";

type FormDataType = {
    name: string;
    icon: string;
    receitaId: string;
    quantidade: string;
};

export default function IngredientesCadastro() {
    const [formData, setFormData] = useState<FormDataType>({
        name: "",
        icon: "",
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
                icon: "",
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
