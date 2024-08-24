"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
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
    <div>
      <h1>{receita.nome}</h1>
      <Image 
        src={imagePath} 
        alt={receita.nome} 
        width={800} 
        height={600} 
        priority 
      />
      <p>{receita.modoPreparo}</p>
      <ul>
        {receita.ingredientes.map((ingrediente) => (
          <li key={ingrediente.nome}>
            {ingrediente.quantidade} de {ingrediente.nome}
          </li>
        ))}
      </ul>
    </div>
  );
}
