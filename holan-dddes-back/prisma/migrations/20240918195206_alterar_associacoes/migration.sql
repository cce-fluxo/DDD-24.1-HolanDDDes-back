/*
  Warnings:

  - The primary key for the `ClienteNoCupom` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ComodidadeNaAcomodacao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ComodidadeNoHotel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `CupomNoHotel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ProprietarioNoInteresse` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "ClienteNoCupom" DROP CONSTRAINT "ClienteNoCupom_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "ClienteNoCupom_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ComodidadeNaAcomodacao" DROP CONSTRAINT "ComodidadeNaAcomodacao_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "ComodidadeNaAcomodacao_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ComodidadeNoHotel" DROP CONSTRAINT "ComodidadeNoHotel_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "ComodidadeNoHotel_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "CupomNoHotel" DROP CONSTRAINT "CupomNoHotel_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "CupomNoHotel_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ProprietarioNoInteresse" DROP CONSTRAINT "ProprietarioNoInteresse_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "ProprietarioNoInteresse_pkey" PRIMARY KEY ("id");
