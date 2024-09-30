-- DropForeignKey
ALTER TABLE "Avaliacao" DROP CONSTRAINT "Avaliacao_clientId_fkey";

-- DropForeignKey
ALTER TABLE "Avaliacao" DROP CONSTRAINT "Avaliacao_hotelId_fkey";

-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Descricao_detalhada" DROP CONSTRAINT "Descricao_detalhada_hotelId_fkey";

-- DropForeignKey
ALTER TABLE "FotoUsuario" DROP CONSTRAINT "FotoUsuario_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "FotosHotel" DROP CONSTRAINT "FotosHotel_hotelId_fkey";

-- DropForeignKey
ALTER TABLE "Hotel" DROP CONSTRAINT "Hotel_proprietarioId_fkey";

-- DropForeignKey
ALTER TABLE "Proprietario" DROP CONSTRAINT "Proprietario_usuarioId_fkey";

-- AlterTable
ALTER TABLE "Usuario" ALTER COLUMN "vip" SET DEFAULT false;

-- AddForeignKey
ALTER TABLE "FotosHotel" ADD CONSTRAINT "FotosHotel_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "Hotel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hotel" ADD CONSTRAINT "Hotel_proprietarioId_fkey" FOREIGN KEY ("proprietarioId") REFERENCES "Proprietario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "Hotel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Descricao_detalhada" ADD CONSTRAINT "Descricao_detalhada_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "Hotel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proprietario" ADD CONSTRAINT "Proprietario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FotoUsuario" ADD CONSTRAINT "FotoUsuario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
