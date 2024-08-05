import Link from "next/link";
import DataTable from "./tabela"; 
import styles from "../../page.module.css"; 
import styles_tags from "./tags.module.css"; 

export default function Tags() {
    return (
        <>
            <div className={styles.container}>
                <DataTable />
            </div>
            <div className={styles_tags.button_container}>
                <Link href="/entidades/tags/cadastro" passHref>
                    <button className={styles_tags.button}>Cadastrar Nova Tag</button>
                </Link>
            </div>
        </>
    );
}
