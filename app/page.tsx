"use client";
import { useRef, useEffect, useState } from "react";
import axios from "axios";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const loginPopupRef = useRef<HTMLDivElement>(null);
  const [receitas, setReceitas] = useState([]);
  const [searchType, setSearchType] = useState("nome");
  const [searchTerm, setSearchTerm] = useState("");
  const [availableTags, setAvailableTags] = useState([]);
  const [availableIngredientes, setAvailableIngredientes] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetchReceitas();
    fetchTags();
    fetchIngredientes();
  }, []);

  const fetchReceitas = async (filters = {}) => {
    try {
      const response = await axios.get("http://localhost:5000/receitas", { params: filters });
      setReceitas(response.data);
    } catch (error) {
      console.error("Erro ao buscar receitas:", error);
    }
  };

  const fetchTags = async () => {
    try {
      const response = await axios.get("http://localhost:5000/tags");
      setAvailableTags(response.data);
    } catch (error) {
      console.error("Erro ao buscar tags:", error);
    }
  };

  const fetchIngredientes = async () => {
    try {
      const response = await axios.get("http://localhost:5000/ingredientes");
      setAvailableIngredientes(response.data);
    } catch (error) {
      console.error("Erro ao buscar ingredientes:", error);
    }
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
    updateSuggestions(e.target.value);
  };

  const updateSuggestions = (input) => {
    if (searchType === "nome") {
      setSuggestions(receitas.filter((r) => r.nome.toLowerCase().includes(input.toLowerCase())));
    } else if (searchType === "tag") {
      setSuggestions(availableTags.filter((t) => t.name.toLowerCase().includes(input.toLowerCase())));
    } else if (searchType === "ingrediente") {
      setSuggestions(availableIngredientes.filter((i) => i.name.toLowerCase().includes(input.toLowerCase())));
    }
  };

  const handleSuggestionClick = (suggestion) => {
    if (searchType === "nome") {
      setSearchTerm(suggestion.nome);
    } else if (searchType === "tag") {
      setSearchTerm(suggestion.name);
    } else if (searchType === "ingrediente") {
      setSearchTerm(suggestion.name);
    }
    setSuggestions([]); // Clear suggestions after selecting one
  };

  const handleSearch = () => {
    const filters: any = {};
    if (searchType === "nome") {
      filters.nome = searchTerm;
    } else if (searchType === "tag") {
      filters.tags = [searchTerm];
    } else if (searchType === "ingrediente") {
      filters.ingredientes = [searchTerm];
    }
    fetchReceitas(filters);
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
              <label htmlFor="searchType">Pesquisar por:</label>
              <select id="searchType" value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                <option value="nome">Nome</option>
                <option value="tag">Tag</option>
                <option value="ingrediente">Ingrediente</option>
              </select>

              <input
                type="text"
                placeholder={`Pesquisar por ${searchType}`}
                value={searchTerm}
                onChange={handleSearchTermChange}
              />

              <div className={styles.suggestions}>
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className={styles.suggestionItem}
                  >
                    {searchType === "nome" ? suggestion.nome : suggestion.name}
                  </div>
                ))}
              </div>

              <button onClick={handleSearch}>Pesquisar</button>
            </div>

            <div className={styles.gallery_row}>
              {receitas.map((receita) => {
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
