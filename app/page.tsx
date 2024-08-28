"use client";
import { useRef, useEffect, useState } from "react";
import axios from "axios";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const loginPopupRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    async function fetchReceitas() {
      try {
        const response = await axios.get("http://localhost:5000/receitas");
        console.log(response.data); // Adicione este log para verificar os dados no console
        setReceitas(response.data);
      } catch (error) {
        console.error("Erro ao buscar receitas:", error);
      }
    }

    fetchReceitas();
  }, []);


  const openPopup = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    if (loginPopupRef.current) {
      loginPopupRef.current.style.display = "block";
    }
  };

  const closePopup = () => {
    if (loginPopupRef.current) {
      loginPopupRef.current.style.display = "none";
    }
  };

  const filterGallery = () => {
    if (categoryRef.current) {
      const selectedCategory = categoryRef.current.value;
      const figures = document.querySelectorAll(".gallery-row figure");

      figures.forEach((figure) => {
        if (
          selectedCategory === "all" ||
          figure.classList.contains(selectedCategory)
        ) {
          (figure as HTMLElement).style.display = "block";
        } else {
          (figure as HTMLElement).style.display = "none";
        }
      });
    }
  };

  return (
    <>
      <div className={styles.mainmenu}>
        <section className={styles.carrossel}>
          <h1 className="text-center">Projeto Culinária</h1>

          <div className={styles.dots}>
            <button className="active"></button>
            <button></button>
            <button></button>
          </div>
        </section>

        <section id="gallery" className={styles.gallery}>
          <div className={styles.container}>
            <h2>Galeria</h2>

            <div className={styles.filter}>
              <label htmlFor="category">Filtrar por categoria:</label>
              <select id="category" ref={categoryRef} onChange={filterGallery}>
                <option value="all">Todos</option>
                <option value="massas">Massas</option>
                <option value="caldos">Caldos</option>
                <option value="sobremesas">Sobremesas</option>
              </select>
            </div>

            <div className={styles.gallery_row}>
            {receitas.map((receita) => {
              // Processa o nome da receita para gerar o nome do arquivo da imagem
              const imagemSrc = `/images/${receita.nome.toLowerCase().replace(/\s+/g, '-')}.jpg`;
              return (
                <figure key={receita.id} className={styles.receita}>
                  <img src={imagemSrc} alt={receita.nome} />
                  <figcaption>{receita.nome}</figcaption>
                  <Link href={`/entidades/receita/${receita.id}`}>Ver Receita</Link>
                </figure>
              );
            })}
          </div>
          </div>
        </section>
      </div>
    </>
  );
}
