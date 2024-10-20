/*
  Warnings:

  - You are about to drop the `Endereco` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Hotel" DROP CONSTRAINT "Hotel_enderecoId_fkey";

-- DropTable
DROP TABLE "Endereco";
