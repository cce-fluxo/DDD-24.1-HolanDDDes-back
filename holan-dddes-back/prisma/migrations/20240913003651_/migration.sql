-- CreateTable
CREATE TABLE "CupomNoHotel" (
    "hotelId" INTEGER NOT NULL,
    "cupomId" INTEGER NOT NULL,

    CONSTRAINT "CupomNoHotel_pkey" PRIMARY KEY ("hotelId","cupomId")
);

-- AddForeignKey
ALTER TABLE "CupomNoHotel" ADD CONSTRAINT "CupomNoHotel_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "Hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CupomNoHotel" ADD CONSTRAINT "CupomNoHotel_cupomId_fkey" FOREIGN KEY ("cupomId") REFERENCES "Cupom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
