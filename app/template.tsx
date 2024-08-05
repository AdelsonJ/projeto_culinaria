"use client";
import Link from "next/link";
import styles from "./page.module.css";
import Login from "./ui/login";

export default function Template({
  children,
  openPopup
}: {
  children: React.ReactNode,
  openPopup: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}) {
  return (
    <main className={styles.main}>
      <header className={styles.dark}>
        <div className={styles.container_header}>
          <img className={styles.logo} src="/images/chefe.png" alt="Logo Chefe" />
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/entidades/ingrediente">Ingrediente</Link></li>
            <li><Link href="">Receita</Link></li>
            <li><Link href="/entidades/tags">Tags</Link></li>
            <li><Link href="">Login</Link></li>
          </ul>
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
