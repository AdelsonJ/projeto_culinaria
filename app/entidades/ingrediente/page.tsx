import Link from "next/link";
import DataTable from "./tabela"; 
import styles from "../../page.module.css"; 
import styles_ingrediente from "./ingrediente.module.css"; 

export default function Ingrediente() {
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
