-- CreateTable
CREATE TABLE "Usuario" (
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "data_nasc" TIMESTAMP(3) NOT NULL,
    "idade" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("username")
);

-- CreateTable
CREATE TABLE "Tag" (
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "cor" TEXT NOT NULL,
    "usuarioUsername" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("nome")
);

-- CreateTable
CREATE TABLE "Ingrediente" (
    "nome" TEXT NOT NULL,
    "icone" TEXT,
    "receitaId" INTEGER,
    "usuarioUsername" TEXT NOT NULL,
    "quantidade" TEXT NOT NULL,

    CONSTRAINT "Ingrediente_pkey" PRIMARY KEY ("nome")
);

-- CreateTable
CREATE TABLE "Receita" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "data_pub" TIMESTAMP(3) NOT NULL,
    "nota" DOUBLE PRECISION NOT NULL,
    "usuarioUsername" TEXT NOT NULL,

    CONSTRAINT "Receita_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Avaliacao" (
    "id" SERIAL NOT NULL,
    "usuarioUsername" TEXT NOT NULL,
    "hora" TIMESTAMP(3) NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "texto" TEXT NOT NULL,
    "receitaId" INTEGER NOT NULL,

    CONSTRAINT "Avaliacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alergia" (
    "usuarioUsername" TEXT NOT NULL,
    "tagNome" TEXT NOT NULL,

    CONSTRAINT "Alergia_pkey" PRIMARY KEY ("usuarioUsername","tagNome")
);

-- CreateTable
CREATE TABLE "Contem" (
    "receitaId" INTEGER NOT NULL,
    "ingredNome" TEXT NOT NULL,
    "quantidade" TEXT NOT NULL,

    CONSTRAINT "Contem_pkey" PRIMARY KEY ("receitaId","ingredNome")
);

-- CreateTable
CREATE TABLE "Classifica" (
    "ingredNome" TEXT NOT NULL,
    "tagNome" TEXT NOT NULL,
    "quantidade" TEXT NOT NULL,

    CONSTRAINT "Classifica_pkey" PRIMARY KEY ("ingredNome","tagNome")
);

-- CreateTable
CREATE TABLE "Favorito" (
    "usuarioUsername" TEXT NOT NULL,
    "receitaId" INTEGER NOT NULL,

    CONSTRAINT "Favorito_pkey" PRIMARY KEY ("usuarioUsername","receitaId")
);

-- CreateTable
CREATE TABLE "Imagem" (
    "receitaId" INTEGER NOT NULL,
    "imagemCod" TEXT NOT NULL,

    CONSTRAINT "Imagem_pkey" PRIMARY KEY ("imagemCod")
);

-- CreateTable
CREATE TABLE "_ReceitaToTag" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_ReceitaToTag_AB_unique" ON "_ReceitaToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_ReceitaToTag_B_index" ON "_ReceitaToTag"("B");

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_usuarioUsername_fkey" FOREIGN KEY ("usuarioUsername") REFERENCES "Usuario"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingrediente" ADD CONSTRAINT "Ingrediente_usuarioUsername_fkey" FOREIGN KEY ("usuarioUsername") REFERENCES "Usuario"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingrediente" ADD CONSTRAINT "Ingrediente_receitaId_fkey" FOREIGN KEY ("receitaId") REFERENCES "Receita"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Receita" ADD CONSTRAINT "Receita_usuarioUsername_fkey" FOREIGN KEY ("usuarioUsername") REFERENCES "Usuario"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_usuarioUsername_fkey" FOREIGN KEY ("usuarioUsername") REFERENCES "Usuario"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_receitaId_fkey" FOREIGN KEY ("receitaId") REFERENCES "Receita"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alergia" ADD CONSTRAINT "Alergia_usuarioUsername_fkey" FOREIGN KEY ("usuarioUsername") REFERENCES "Usuario"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alergia" ADD CONSTRAINT "Alergia_tagNome_fkey" FOREIGN KEY ("tagNome") REFERENCES "Tag"("nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contem" ADD CONSTRAINT "Contem_receitaId_fkey" FOREIGN KEY ("receitaId") REFERENCES "Receita"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contem" ADD CONSTRAINT "Contem_ingredNome_fkey" FOREIGN KEY ("ingredNome") REFERENCES "Ingrediente"("nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Classifica" ADD CONSTRAINT "Classifica_ingredNome_fkey" FOREIGN KEY ("ingredNome") REFERENCES "Ingrediente"("nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Classifica" ADD CONSTRAINT "Classifica_tagNome_fkey" FOREIGN KEY ("tagNome") REFERENCES "Tag"("nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorito" ADD CONSTRAINT "Favorito_usuarioUsername_fkey" FOREIGN KEY ("usuarioUsername") REFERENCES "Usuario"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorito" ADD CONSTRAINT "Favorito_receitaId_fkey" FOREIGN KEY ("receitaId") REFERENCES "Receita"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Imagem" ADD CONSTRAINT "Imagem_receitaId_fkey" FOREIGN KEY ("receitaId") REFERENCES "Receita"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ReceitaToTag" ADD CONSTRAINT "_ReceitaToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Receita"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ReceitaToTag" ADD CONSTRAINT "_ReceitaToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("nome") ON DELETE CASCADE ON UPDATE CASCADE;
