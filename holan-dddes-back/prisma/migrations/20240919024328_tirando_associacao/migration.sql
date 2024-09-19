/*
  Warnings:

  - You are about to drop the `ComodidadeNoHotel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ComodidadeNoHotel" DROP CONSTRAINT "ComodidadeNoHotel_comodidadeId_fkey";

-- DropForeignKey
ALTER TABLE "ComodidadeNoHotel" DROP CONSTRAINT "ComodidadeNoHotel_hotelId_fkey";

-- DropTable
DROP TABLE "ComodidadeNoHotel";

-- CreateTable
CREATE TABLE "_ComodidadeHotelToHotel" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ComodidadeHotelToHotel_AB_unique" ON "_ComodidadeHotelToHotel"("A", "B");

-- CreateIndex
CREATE INDEX "_ComodidadeHotelToHotel_B_index" ON "_ComodidadeHotelToHotel"("B");

-- AddForeignKey
ALTER TABLE "_ComodidadeHotelToHotel" ADD CONSTRAINT "_ComodidadeHotelToHotel_A_fkey" FOREIGN KEY ("A") REFERENCES "ComodidadeHotel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ComodidadeHotelToHotel" ADD CONSTRAINT "_ComodidadeHotelToHotel_B_fkey" FOREIGN KEY ("B") REFERENCES "Hotel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
