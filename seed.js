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

  // Tags
  const tags = [
    { nome: "Vegetariano", descricao: "Sem carne", cor: "verde", usuarioUsername: admin.username },
    { nome: "Contém Glúten", descricao: "Possui glúten", cor: "laranja", usuarioUsername: admin.username },
    { nome: "Contem Lactose", descricao: "Possui lactose", cor: "azul", usuarioUsername: admin.username },
    { nome: "Massas", descricao: "Farináceo", cor: "vermelho", usuarioUsername: admin.username }
  ];

  for (const tag of tags) {
    await prisma.tag.upsert({
      where: { nome: tag.nome },
      update: {},  // Não fazemos nada se a tag já existir
      create: tag,
    });
  }

  console.log('Tags foram inseridas ou já existiam.');

  // Ingredientes
  const ingredientes = [
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
    { nome: "feijão preto", quantidade: "1 kg", usuarioUsername: admin.username },
    { nome: "carne seca", quantidade: "300g", usuarioUsername: admin.username },
    { nome: "linguiça calabresa", quantidade: "200g", usuarioUsername: admin.username },
    { nome: "costelinha de porco", quantidade: "300g", usuarioUsername: admin.username },
    { nome: "orelha de porco", quantidade: "1 unidade", usuarioUsername: admin.username },
    { nome: "louro", quantidade: "2 folhas", usuarioUsername: admin.username },
    { nome: "sal", quantidade: "a gosto", usuarioUsername: admin.username },
    { nome: "pimenta", quantidade: "a gosto", usuarioUsername: admin.username },
    { nome: "alho", quantidade: "3 dentes", usuarioUsername: admin.username },
    { nome: "peito de frango em cubos", quantidade: "1 peito", usuarioUsername: admin.username },
    { nome: "molho de tomate", quantidade: "1 lata", usuarioUsername: admin.username },
    { nome: "champignon", quantidade: "100g", usuarioUsername: admin.username },
    { nome: "peixe branco", quantidade: "500g", usuarioUsername: admin.username },
    { nome: "leite de coco", quantidade: "200ml", usuarioUsername: admin.username },
    { nome: "azeite de dendê", quantidade: "100ml", usuarioUsername: admin.username },
    { nome: "pimentão", quantidade: "1 unidade", usuarioUsername: admin.username },
    { nome: "coentro", quantidade: "a gosto", usuarioUsername: admin.username },
    { nome: "polvilho doce", quantidade: "500g", usuarioUsername: admin.username },
    { nome: "queijo minas ralado", quantidade: "300g", usuarioUsername: admin.username },
    { nome: "óleo", quantidade: "100ml", usuarioUsername: admin.username },
    { nome: "ovos", quantidade: "3 unidades", usuarioUsername: admin.username }
  ];

  for (const ingrediente of ingredientes) {
    await prisma.ingrediente.upsert({
      where: { nome: ingrediente.nome },
      update: {},  // Não fazemos nada se o ingrediente já existir
      create: ingrediente,
    });
  }

  console.log('Ingredientes foram inseridos ou já existiam.');

  // Relações entre ingredientes e tags (Classifica)
  const classificaRelacoes = [
    // Vegetariano
    { ingredNome: "massa para lasanha", tagNome: "Vegetariano" },
    { ingredNome: "queijo mussarela fatiado", tagNome: "Vegetariano" },
    { ingredNome: "presunto fatiado", tagNome: "Contem Lactose" },
    { ingredNome: "creme de leite", tagNome: "Contem Lactose" },
    { ingredNome: "queijo minas ralado", tagNome: "Vegetariano" },
    
    // Contém Glúten
    { ingredNome: "massa para lasanha", tagNome: "Contém Glúten" },
    { ingredNome: "farinha", tagNome: "Contém Glúten" },
    { ingredNome: "polvilho doce", tagNome: "Contém Glúten" },
    
    // Contém Lactose
    { ingredNome: "queijo mussarela fatiado", tagNome: "Contem Lactose" },
    { ingredNome: "leite", tagNome: "Contem Lactose" },
    { ingredNome: "creme de leite", tagNome: "Contem Lactose" },
    { ingredNome: "queijo minas ralado", tagNome: "Contem Lactose" },

    // Massas
    { ingredNome: "massa para lasanha", tagNome: "Massas" },
    { ingredNome: "farinha", tagNome: "Massas" },
    { ingredNome: "polvilho doce", tagNome: "Massas" }
  ];

  for (const relacao of classificaRelacoes) {
    await prisma.classifica.upsert({
      where: { 
        ingredNome_tagNome: {
          ingredNome: relacao.ingredNome,
          tagNome: relacao.tagNome
        }
      },
      update: {},  // Não fazemos nada se o relacionamento já existir
      create: {
        ingredNome: relacao.ingredNome,
        tagNome: relacao.tagNome,
        quantidade: ingredientes.find(i => i.nome === relacao.ingredNome).quantidade,
      },
    });
  }

  console.log('Relações entre ingredientes e tags foram criadas ou já existiam.');
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
