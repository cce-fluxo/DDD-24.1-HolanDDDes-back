/*
  Warnings:

  - You are about to drop the `ClienteNoCupom` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CupomNoHotel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProprietarioNoInteresse` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ClienteNoCupom" DROP CONSTRAINT "ClienteNoCupom_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "ClienteNoCupom" DROP CONSTRAINT "ClienteNoCupom_cupomId_fkey";

-- DropForeignKey
ALTER TABLE "CupomNoHotel" DROP CONSTRAINT "CupomNoHotel_cupomId_fkey";

-- DropForeignKey
ALTER TABLE "CupomNoHotel" DROP CONSTRAINT "CupomNoHotel_hotelId_fkey";

-- DropForeignKey
ALTER TABLE "ProprietarioNoInteresse" DROP CONSTRAINT "ProprietarioNoInteresse_interesseId_fkey";

-- DropForeignKey
ALTER TABLE "ProprietarioNoInteresse" DROP CONSTRAINT "ProprietarioNoInteresse_proprietarioId_fkey";

-- DropTable
DROP TABLE "ClienteNoCupom";

-- DropTable
DROP TABLE "CupomNoHotel";

-- DropTable
DROP TABLE "ProprietarioNoInteresse";

-- CreateTable
CREATE TABLE "__CupomToCliente" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ProprietarioToInteresse" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "__CupomToHotel" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "__CupomToCliente_AB_unique" ON "__CupomToCliente"("A", "B");

-- CreateIndex
CREATE INDEX "__CupomToCliente_B_index" ON "__CupomToCliente"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProprietarioToInteresse_AB_unique" ON "_ProprietarioToInteresse"("A", "B");

-- CreateIndex
CREATE INDEX "_ProprietarioToInteresse_B_index" ON "_ProprietarioToInteresse"("B");

-- CreateIndex
CREATE UNIQUE INDEX "__CupomToHotel_AB_unique" ON "__CupomToHotel"("A", "B");

-- CreateIndex
CREATE INDEX "__CupomToHotel_B_index" ON "__CupomToHotel"("B");

-- AddForeignKey
ALTER TABLE "__CupomToCliente" ADD CONSTRAINT "__CupomToCliente_A_fkey" FOREIGN KEY ("A") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "__CupomToCliente" ADD CONSTRAINT "__CupomToCliente_B_fkey" FOREIGN KEY ("B") REFERENCES "Cupom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProprietarioToInteresse" ADD CONSTRAINT "_ProprietarioToInteresse_A_fkey" FOREIGN KEY ("A") REFERENCES "Interesse"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProprietarioToInteresse" ADD CONSTRAINT "_ProprietarioToInteresse_B_fkey" FOREIGN KEY ("B") REFERENCES "Proprietario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "__CupomToHotel" ADD CONSTRAINT "__CupomToHotel_A_fkey" FOREIGN KEY ("A") REFERENCES "Cupom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "__CupomToHotel" ADD CONSTRAINT "__CupomToHotel_B_fkey" FOREIGN KEY ("B") REFERENCES "Hotel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
