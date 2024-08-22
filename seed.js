const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Criando ou atualizando o usuário Admin
  const admin = await prisma.usuario.upsert({
    where: { username: 'admin' },
    update: {},  // Não fazemos nada se o usuário já existir
    create: {
      username: 'admin',
      email: 'admin@example.com',
      senha: 'senha_super_secreta',
      data_nasc: new Date('1980-01-01'),
      idade: 44,
      tipo: 'admin',
    },
  });

  console.log(`Usuário Admin ${admin.username} foi criado ou já existia.`);

  // Ingredientes para Lasanha de Frango e Feijoada
  const ingredientes = [
    // Ingredientes Lasanha de Frango
    { nome: "massa para lasanha", quantidade: "1 pacote", usuarioUsername: admin.username },
    { nome: "peito de frango desfiado", quantidade: "1 peito", usuarioUsername: admin.username },
    { nome: "queijo mussarela fatiado", quantidade: "500g", usuarioUsername: admin.username },
    { nome: "presunto fatiado", quantidade: "400g", usuarioUsername: admin.username },
    { nome: "caldo de galinha", quantidade: "2 caldos", usuarioUsername: admin.username },
    { nome: "leite", quantidade: "2 copos", usuarioUsername: admin.username },
    { nome: "creme de leite", quantidade: "1 caixa", usuarioUsername: admin.username },
    { nome: "farinha", quantidade: "2 colheres", usuarioUsername: admin.username },
    { nome: "manteiga", quantidade: "3 colheres", usuarioUsername: admin.username },
    { nome: "cebola", quantidade: "1 unidade", usuarioUsername: admin.username },
    { nome: "tomate", quantidade: "1 unidade", usuarioUsername: admin.username },

    // Ingredientes Feijoada
    { nome: "feijão preto", quantidade: "1 kg", usuarioUsername: admin.username },
    { nome: "carne seca", quantidade: "300g", usuarioUsername: admin.username },
    { nome: "linguiça calabresa", quantidade: "200g", usuarioUsername: admin.username },
    { nome: "costelinha de porco", quantidade: "300g", usuarioUsername: admin.username },
    { nome: "orelha de porco", quantidade: "1 unidade", usuarioUsername: admin.username },
    { nome: "cebola", quantidade: "1 unidade", usuarioUsername: admin.username },
    { nome: "alho", quantidade: "3 dentes", usuarioUsername: admin.username },
    { nome: "louro", quantidade: "2 folhas", usuarioUsername: admin.username },
    { nome: "sal", quantidade: "a gosto", usuarioUsername: admin.username },
    { nome: "pimenta", quantidade: "a gosto", usuarioUsername: admin.username },
  ];

  // Inserindo os ingredientes associados ao Admin, apenas se não existirem
  for (const ingrediente of ingredientes) {
    await prisma.ingrediente.upsert({
      where: { nome: ingrediente.nome },
      update: {},  // Não fazemos nada se o ingrediente já existir
      create: ingrediente,
    });
  }

  console.log('Ingredientes foram inseridos ou já existiam.');

  // Adicionando ou atualizando a receita "Lasanha de Frango"
  let receita = await prisma.receita.findFirst({
    where: { nome: "Lasanha de Frango" }
  });

  if (!receita) {
    receita = await prisma.receita.create({
      data: {
        nome: "Lasanha de Frango",
        data_pub: new Date(),
        nota: 4.5,
        modoPreparo: `
          1. Preaqueça o forno a 180°C.
          2. Em uma panela, refogue a cebola picada com a manteiga até dourar.
          3. Acrescente o frango desfiado, o tomate picado, e o caldo de galinha.
          4. Monte a lasanha em camadas alternadas de massa, presunto, queijo e molho.
          5. Leve ao forno por 20 minutos ou até dourar.
        `,
        usuarioUsername: admin.username,
      },
    });
    console.log(`Receita ${receita.nome} foi criada.`);
  } else {
    console.log('Receita Lasanha de Frango já existe.');
  }

  // Criando os relacionamentos entre Receita e Ingredientes usando Contem para "Lasanha de Frango"
  for (const ingrediente of ingredientes.filter(i => i.nome.includes("lasanha") || i.nome.includes("frango"))) {
    await prisma.contem.upsert({
      where: { 
        receitaId_ingredNome: {
          receitaId: receita.id,
          ingredNome: ingrediente.nome
        }
      },
      update: {},  // Não fazemos nada se o relacionamento já existir
      create: {
        receitaId: receita.id,
        ingredNome: ingrediente.nome,
        quantidade: ingrediente.quantidade,
      },
    });
  }

  console.log('Relacionamentos entre Receita Lasanha de Frango e Ingredientes foram criados ou já existiam.');

  // Adicionando ou atualizando a receita "Feijoada"
  let receitaFeijoada = await prisma.receita.findFirst({
    where: { nome: "Feijoada" }
  });

  if (!receitaFeijoada) {
    receitaFeijoada = await prisma.receita.create({
      data: {
        nome: "Feijoada",
        data_pub: new Date(),
        nota: 5.0,
        modoPreparo: `
          1. Deixe o feijão de molho por pelo menos 12 horas.
          2. Cozinhe o feijão em uma panela grande com água suficiente.
          3. Em outra panela, frite a carne seca, a linguiça, a costelinha e a orelha de porco.
          4. Acrescente a cebola picada, o alho e as folhas de louro.
          5. Junte tudo ao feijão e cozinhe por mais 30 minutos.
          6. Ajuste o sal e a pimenta a gosto.
        `,
        usuarioUsername: admin.username,
      },
    });
    console.log(`Receita ${receitaFeijoada.nome} foi criada.`);
  } else {
    console.log('Receita Feijoada já existe.');
  }

  // Criando os relacionamentos entre Receita e Ingredientes usando Contem para "Feijoada"
  for (const ingrediente of ingredientes.filter(i => i.nome.includes("feijão") || i.nome.includes("carne"))) {
    await prisma.contem.upsert({
      where: { 
        receitaId_ingredNome: {
          receitaId: receitaFeijoada.id,
          ingredNome: ingrediente.nome
        }
      },
      update: {},  // Não fazemos nada se o relacionamento já existir
      create: {
        receitaId: receitaFeijoada.id,
        ingredNome: ingrediente.nome,
        quantidade: ingrediente.quantidade,
      },
    });
  }

  console.log('Relacionamentos entre Receita Feijoada e Ingredientes foram criados ou já existiam.');
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
