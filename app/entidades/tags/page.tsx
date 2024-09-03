"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import DataTable from "./tabela"; 
import styles from "../../page.module.css"; 
import styles_tags from "./tags.module.css"; 

export default function Tags() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  if (!isLoggedIn) {
    return (
      <div className={styles.container}>
        <p>Você precisa estar logado para acessar esta página.</p>
        <Link href="/ui/login">Ir para a página de Login</Link>
      </div>
    );
  }

  return (
    <>
      <div className={styles.container}>
        <DataTable />
      </div>
      <div className={styles_tags.button_container}>
        <Link href="/entidades/tags/cadastro" passHref>
          <button className={styles_tags.button}>Cadastrar</button>
        </Link>
        <Link href="/entidades/tags/alterar_excluir" passHref>
          <button className={styles_tags.button}>Atualizar/Excluir</button>
        </Link>
      </div>
    </>
  );
}
