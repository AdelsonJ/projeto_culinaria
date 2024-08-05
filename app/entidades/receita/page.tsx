import styles from "../../page.module.css";
import styles_receitas from "./receitas.module.css";

export default function Receitas() {
    return (
        <>
            <main>
                <section className={styles.carrossel}>
                    <h1 className={styles.text_center}>Lasanha</h1>

                    <div className={styles.dots}>
                        <button className={styles.active}></button>
                        <button></button>
                        <button></button>
                    </div>
                </section>

                <section id="gallery" className={styles.gallery}>
                    <div className={styles.container}>
                        <div className={styles_receitas.recipe_header}>
                            <h2>Receita</h2>
                            <div className={styles_receitas.rating}>
                                <div className={styles_receitas.stars} id="stars">
                                    <span className={styles_receitas.star} data-value="1"></span>
                                    <span className={styles_receitas.star} data-value="2"></span>
                                    <span className={styles_receitas.star} data-value="3"></span>
                                    <span className={styles_receitas.star} data-value="4"></span>
                                    <span className={styles.star} data-value="5"></span>
                                </div>
                                <span className={styles_receitas.rating_value} id="rating_value">Rating: 5/5</span>
                            </div>
                        </div>

                        <div className={styles_receitas.recipe_row}>
                            <figure>
                                <img src="/../../images/lasanha.jpg" alt="Lasanha" className={styles_receitas.recipe_image} />
                            </figure>
                            <div className={styles_receitas.recipe_content}>
                                <h2>INGREDIENTES</h2>
                                <p>
                                    1 pacote de massa para lasanha da Itália <br />
                                    1 peito de frango desfiado <br />
                                    500g de queijo mussarela fatiado <br />
                                    400g de presunto fatiado <br />
                                    2 caldos de galinha <br />
                                    2 copos de leite<br />
                                    1 caixa de creme de leite <br />
                                    2 colheres de farinha <br />
                                    3 colheres de manteiga <br />
                                    1 cebola <br />
                                    1 tomate
                                </p>
                            </div>
                        </div>
                        <div className={styles_receitas.recipe_content}>
                            <h2>MODO DE PREPARO</h2>
                            <p>
                                MOLHO VERMELHO:<br />
                                Pique a cebola em pedaços pequenos, coloque em uma panela e doure com 1 colher de manteiga.<br />
                                Acrescente o tomate, o frango e 1 caldo de galinha, mexa sempre até o frango ficar totalmente dourado.<br /><br />

                                MOLHO BRANCO:<br />
                                Em uma panela, faça um creme homogêneo com as 2 colheres de farinha e 2 colheres de manteiga.<br />
                                Acrescente o leite, 1 caldo de galinha e mexa constantemente.<br />
                                Retire do fogo e acrescente o creme de leite, reserve.<br /><br />

                                MONTAGEM:<br />
                                Em um refratário, coloque 2 conchas de molho branco.<br />
                                Faça a base com 1 camada de massa para lasanha da Itália, cubra com 1 camada de presunto, 1 camada de queijo, 1 camada de frango e 2 conchas de molho branco.<br />
                                Repita as camadas até faltar cerca de 2,5 cm para chegar na borda do refratário: 1 camada de massa para lasanha da Itália, 1 camada de presunto, 1 camada de queijo, 1 camada de frango e 2 conchas de molho branco.<br />
                                Para finalizar, cubra a lasanha com muito queijo e molho branco.<br />
                                Asse por, aproximadamente, 20 minutos em forno preaquecido a 180°C.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
