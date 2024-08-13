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

        const newData = formData;
        console.log('Novo dado:', newData);

        let existingData = [];

        try {
            const response = await fetch('http://localhost:5000/tags');
            if (!response.ok) {
                throw new Error(`Erro na resposta: ${response.statusText}`);
            }
            existingData = await response.json();
            console.log('Dados existentes:', existingData);
        } catch (error) {
            console.error("Erro ao buscar o arquivo JSON:", error);
            return;
        }

        existingData.push(newData);
        console.log('Dados após inserção:', existingData);

        const updatedData = JSON.stringify(existingData, null, 2);
        console.log('Dados atualizados:', updatedData);

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
            alert('Dados salvos com sucesso!');
            setFormData({
                name: "",
                description: "",
                color: ""
            });
            
            router.push('/entidades/tags');
        } catch (error) {
            console.error("Erro ao salvar o arquivo JSON:", error);
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
