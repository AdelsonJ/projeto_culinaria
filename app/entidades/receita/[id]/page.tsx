"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "../receitas.module.css";
import axios from "axios";

export default function Receita({ params }) {
  const { id } = params;
  const [receita, setReceita] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchReceita = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/receitas/${id}`);
        setReceita(response.data);
      } catch (error) {
        console.error("Erro ao buscar a receita:", error);
        router.push('/entidades/receita'); // Redireciona para a lista de receitas se houver erro
      }
    };

    fetchReceita();
  }, [id, router]);

  if (!receita) {
    return <div>Carregando...</div>;
  }

  const imagePath = `/images/${receita.nome.toLowerCase().replace(/\s+/g, '-')}.jpg`;

  return (
    <div className={styles.recipeContainer}>
      <div className={styles.recipeHeader}>
        <h1>{receita.nome}</h1>
        <div className={styles.stars}>
          {/* Aqui você pode adicionar a lógica de estrelas se precisar */}
        </div>
      </div>
      <div className={styles.recipeRow}>
        <figure>
          <Image 
            src={imagePath} 
            alt={receita.nome} 
            width={600} 
            height={450} 
            className={styles.recipeImage}
            priority 
          />
        </figure>
        <div className={styles.recipeContent}>
          <h2>Ingredientes</h2>
          <ul>
            {receita.ingredientes.map((ingrediente) => (
              <li key={ingrediente.nome}>
                {ingrediente.quantidade} de {ingrediente.nome}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.recipePreparation}>
        <h2>Modo de Preparo</h2>
        <p>{receita.modoPreparo}</p>
      </div>
    </div>
  );
}
