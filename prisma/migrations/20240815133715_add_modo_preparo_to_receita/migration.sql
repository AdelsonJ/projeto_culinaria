/*
  Warnings:

  - Made the column `modoPreparo` on table `Receita` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Receita" ALTER COLUMN "modoPreparo" SET NOT NULL;
