import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

const prisma = new PrismaClient();

export default async function Index() {
    const receitas = await prisma.receita.findMany();

    return (
        <div>
            <h1>Lista de Receitas</h1>
            
            <ul>
                {receitas.map((receita) => (
                    <li key={receita.id}>
                        {receita.nome}
                        <Link href="./receita/cadastro">
                            <button>Cadastrar</button>
                        </Link>
                        <Link href={`./receita/alterar_excluir/${receita.id}`}>
                            <button>Alterar/Excluir</button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
