"use client";
import { useState } from "react";
import styles from "../../../page.module.css";
import styles_ingredientes from "../ingrediente.module.css";
import Form from './formulario';
import { useRouter } from "next/navigation";

type FormDataType = {
    name: string;
    icon: string;
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
    
        const newData = formData;
        console.log('Novo dado:', newData);
    
        let existingData = [];
    
        try {
            const response = await fetch('http://localhost:5000/ingredientes');
            if (!response.ok) {
                throw new Error(`Erro na resposta: ${response.statusText}`);
            }
            existingData = await response.json();
            console.log('Dados existentes:', existingData);
    
            // Se existingData for um array contendo um único array, desaninhá-lo
            if (Array.isArray(existingData) && existingData.length === 1 && Array.isArray(existingData[0])) {
                existingData = existingData[0];
            }
    
        } catch (error) {
            console.error("Erro ao buscar o arquivo JSON:", error);
            return;
        }
    
        existingData.push(newData);
        console.log('Dados após inserção:', existingData);
    
        const updatedData = JSON.stringify(existingData, null, 2);
        console.log('Dados atualizados:', updatedData);
    
        try {
            const saveResponse = await fetch('http://localhost:5000/saveIngredientes', {
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
                icon: "",
            });
    
            router.push('/entidades/ingrediente');
        } catch (error) {
            console.error("Erro ao salvar o arquivo JSON:", error);
        }
    };
    

    return (
        <main>
            <section id="gallery" className={styles.gallery}>
                <div className={styles.container}>
                    <h2>Cadastrar ingredientes</h2>
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
