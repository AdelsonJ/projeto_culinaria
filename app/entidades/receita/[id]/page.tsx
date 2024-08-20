import { PrismaClient } from '@prisma/client';
import { useRouter } from 'next/router';

const prisma = new PrismaClient();

export default async function Receita({ params }) {
    const { id } = params;
    const receita = await prisma.receita.findUnique({
        where: { id: parseInt(id) },
        include: {
            Contems: {
                include: { Ingrediente: true }
            }
        }
    });

    if (!receita) {
        return <div>Receita não encontrada</div>;
    }

    return (
        <div>
            <h1>{receita.nome}</h1>
            <p>{receita.modoPreparo}</p>
            <ul>
                {receita.Contems.map((contem) => (
                    <li key={contem.Ingrediente.nome}>
                        {contem.quantidade} de {contem.Ingrediente.nome}
                    </li>
                ))}
            </ul>
        </div>
    );
}
