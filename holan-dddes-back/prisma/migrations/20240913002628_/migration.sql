/*
  Warnings:

  - You are about to drop the column `status` on the `Cupom` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[proprietarioId]` on the table `Hotel` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cupomId]` on the table `Reserva` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Status` to the `Cupom` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cupom" DROP COLUMN "status",
ADD COLUMN     "Status" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Hotel" ADD COLUMN     "descricao" TEXT;

-- AlterTable
ALTER TABLE "Usuario" ALTER COLUMN "data_nascimento" SET DATA TYPE TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "Hotel_proprietarioId_key" ON "Hotel"("proprietarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Reserva_cupomId_key" ON "Reserva"("cupomId");

-- AddForeignKey
ALTER TABLE "Hotel" ADD CONSTRAINT "Hotel_proprietarioId_fkey" FOREIGN KEY ("proprietarioId") REFERENCES "Proprietario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_cupomId_fkey" FOREIGN KEY ("cupomId") REFERENCES "Cupom"("id") ON DELETE SET NULL ON UPDATE CASCADE;
