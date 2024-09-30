/*
  Warnings:

  - You are about to drop the `_ComodidadeHotelToHotel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ComodidadeHotelToHotel" DROP CONSTRAINT "_ComodidadeHotelToHotel_A_fkey";

-- DropForeignKey
ALTER TABLE "_ComodidadeHotelToHotel" DROP CONSTRAINT "_ComodidadeHotelToHotel_B_fkey";

-- DropTable
DROP TABLE "_ComodidadeHotelToHotel";

-- CreateTable
CREATE TABLE "__HotelToComodidade" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "__HotelToComodidade_AB_unique" ON "__HotelToComodidade"("A", "B");

-- CreateIndex
CREATE INDEX "__HotelToComodidade_B_index" ON "__HotelToComodidade"("B");

-- AddForeignKey
ALTER TABLE "__HotelToComodidade" ADD CONSTRAINT "__HotelToComodidade_A_fkey" FOREIGN KEY ("A") REFERENCES "ComodidadeHotel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "__HotelToComodidade" ADD CONSTRAINT "__HotelToComodidade_B_fkey" FOREIGN KEY ("B") REFERENCES "Hotel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
