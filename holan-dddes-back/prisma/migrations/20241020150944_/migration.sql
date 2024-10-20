/*
  Warnings:

  - You are about to drop the column `enderecoId` on the `Hotel` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[endereco]` on the table `Hotel` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `endereco` to the `Hotel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Hotel" DROP COLUMN "enderecoId",
ADD COLUMN     "endereco" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Hotel_endereco_key" ON "Hotel"("endereco");
