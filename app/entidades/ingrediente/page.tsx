"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import DataTable from "./tabela"; 
import styles from "../../page.module.css"; 
import styles_ingrediente from "./ingrediente.module.css"; 

export default function Ingrediente() {
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
      <div className={styles_ingrediente.button_container}>
        <Link href="/entidades/ingrediente/cadastro" passHref>
          <button className={styles_ingrediente.button}>Cadastrar</button>
        </Link>
        <Link href="/entidades/ingrediente/alterar_excluir" passHref>
          <button className={styles_ingrediente.button}>Atualizar/Excluir</button>
        </Link>
      </div>
    </>
  );
}
