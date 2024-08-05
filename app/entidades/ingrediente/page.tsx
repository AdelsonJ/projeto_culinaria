import styles from "../../page.module.css";

export default function Ingrediente() {
    return(
    <>
        <main>
            <section id="gallery" className={styles.gallery}>
                <div className={styles.container}>
                    <h2>Cadastrar Ingrediente</h2>
                    <form>
                        <label htmlFor="name">Nome:</label>
                        <br />
                        <input type="text" id="name" name="name" />
                        <br />
                        <br />
                        <label htmlFor="description">Descrição:</label>
                        <br />
                        <input type="text" id="description" name="description" />
                        <br />
                        <br />
                        <button type="submit">Confirmar</button>
                    </form>
                </div>
            </section>
        </main>
    </>
    )
}