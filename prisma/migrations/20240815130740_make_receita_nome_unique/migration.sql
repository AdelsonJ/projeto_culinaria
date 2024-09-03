/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `Receita` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Receita_nome_key" ON "Receita"("nome");
