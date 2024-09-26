/*
  Warnings:

  - You are about to drop the column `email` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `senha` on the `Admin` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[usuarioId]` on the table `Admin` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `usuarioId` to the `Admin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Admin" DROP COLUMN "email",
DROP COLUMN "senha",
ADD COLUMN     "usuarioId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Admin_usuarioId_key" ON "Admin"("usuarioId");

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
