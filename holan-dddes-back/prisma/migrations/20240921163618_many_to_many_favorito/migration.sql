/*
  Warnings:

  - You are about to drop the `Favorito` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Favorito" DROP CONSTRAINT "Favorito_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "Favorito" DROP CONSTRAINT "Favorito_hotelId_fkey";

-- DropTable
DROP TABLE "Favorito";

-- CreateTable
CREATE TABLE "__ClienteToHotel" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "__ClienteToHotel_AB_unique" ON "__ClienteToHotel"("A", "B");

-- CreateIndex
CREATE INDEX "__ClienteToHotel_B_index" ON "__ClienteToHotel"("B");

-- AddForeignKey
ALTER TABLE "__ClienteToHotel" ADD CONSTRAINT "__ClienteToHotel_A_fkey" FOREIGN KEY ("A") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "__ClienteToHotel" ADD CONSTRAINT "__ClienteToHotel_B_fkey" FOREIGN KEY ("B") REFERENCES "Hotel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
