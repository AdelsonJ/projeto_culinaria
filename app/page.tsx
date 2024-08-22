"use client";
import { useRef } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const loginPopupRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);

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
                <option value="salgados">Salgados</option>
              </select>
            </div>

            <div className={styles.gallery_row}>
            <figure className={styles.massas}>
              <img src="/images/lasanha de frango.jpg" alt="Lasanha" />
              <a className={styles.recipe} title="Recipe">
                <Link href="/entidades/receita/1">Lasanha</Link> 
              </a>
            </figure>

              <figure>
                <img src="/images/feijoada.jpg" alt="Feijoada" />
                <a className={styles.recipe} title="Recipe">
                <Link href="/entidades/receita/2">Feijoada</Link> 
              </a>
              </figure>

              <figure>
                <img src="/images/strogonoff.jpg" alt="Strogonoff" />
                <figcaption>Strogonoff</figcaption>
              </figure>

              <figure>
                <img src="/images/pastel.jpg" alt="Pastel" />
                <figcaption>Pastel</figcaption>
              </figure>

              <figure>
                <img src="/images/coxinha.jpg" alt="Coxinha" />
                <figcaption>Coxinha</figcaption>
              </figure>

              <figure>
                <img src="/images/moqueca.jpg" alt="Moqueca" />
                <figcaption>Moqueca</figcaption>
              </figure>

              <figure>
                <img src="/images/pao_de_queijo.jpg" alt="Pao de Queijo" />
                <figcaption>Pão de Queijo</figcaption>
              </figure>

              <figure>
                <img src="/images/suco_verde.jpg" alt="Suco Verde" />
                <figcaption>Suco Verde</figcaption>
              </figure>

              <figure>
                <img src="/images/pure_de_batata.jpg" alt="Pure de Batata" />
                <figcaption>Purê de Batata</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section id="history" className={`${styles.history} ${styles.dark}`}>
          <div className={styles.container}>
            <div className={styles.col}>
              <h2>História</h2>

              <p>
                O chefe de cozinha é o profissional responsável por organizar a
                cozinha de hotéis e restaurantes, elaborar cardápios e
                supervisionar o trabalho dos cozinheiros. Os chefes planejam a
                execução do prato, o pré-preparo, o preparo, a finalização, a
                qualidade dos alimentos e os métodos de cozimento.
                Características indispensáveis são higiene, metodologia, bom
                senso, criatividade, responsabilidade, capacidade de liderança e
                feeling para novas experiências.
              </p>

              <p>
                Fonte:
                <a
                  className="dark-link"
                  href="https://www.infoescola.com/profissoes/chefe-de-cozinha/"
                  target="_blank"
                  title="Link externo"
                >
                  InfoEscola
                </a>
              </p>
            </div>

            <div className="col">
              <img src="/images/chefe_historia.png" alt="Chefe de culinária." />
            </div>
          </div>
        </section>
      </div>

      <div id="loginPopup" className="popup" ref={loginPopupRef} style={{ display: "none" }}>
        <h2>Login</h2>
        <form>
          <label htmlFor="username">Usuário:</label>
          <br />
          <input type="text" id="username" name="username" />
          <br />
          <br />
          <label htmlFor="password">Senha:</label>
          <br />
          <input type="password" id="password" name="password" />
          <br />
          <br />
          <button type="submit">Entrar</button>
        </form>
        <button onClick={closePopup}>Fechar</button>
      </div>
    </>
  );
}
