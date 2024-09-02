"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Template({
  children,
  openPopup
}: {
  children: React.ReactNode,
  openPopup: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Converte o token em um booleano, true se existe, false se não
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/"; // Redireciona para a página inicial após logout
  };

  return (
    <main className={styles.main}>
      <header className={styles.dark}>
        <div className={styles.container_header}>
          <img className={styles.logo} src="/images/chefe.png" alt="Logo Chefe" />
          <div className={styles.container_header_2}>
            <ul>
              <li><Link href="/">Home</Link></li>
              {isLoggedIn && (
                <>                  
                  <li><Link href="/entidades/receita">Receitas</Link></li>
                  <li><Link href="/entidades/ingrediente">Ingrediente</Link></li>
                  <li><Link href="/entidades/tags">Tags</Link></li>
                </>
              )}
              <li>
                {isLoggedIn ? (
                  <a onClick={handleLogout}>Deslogar</a>
                ) : (
                  <a href="/ui/login" onClick={openPopup}>Login</a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div className={styles.centro}>
        {children}
      </div>

      <footer className={styles.dark}>
        <div className={styles.container}>
          <p>Copyright © Adelson Junior e Matheus Tavares. Projeto Culinaria</p>
        </div>
      </footer>
    </main>
  );
}
