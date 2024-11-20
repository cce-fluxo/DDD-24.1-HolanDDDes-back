/*
  Warnings:

  - A unique constraint covering the columns `[token_resetar_senha]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Acomodacao" ADD COLUMN     "nota" DOUBLE PRECISION NOT NULL DEFAULT 5;

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_token_resetar_senha_key" ON "Usuario"("token_resetar_senha");
