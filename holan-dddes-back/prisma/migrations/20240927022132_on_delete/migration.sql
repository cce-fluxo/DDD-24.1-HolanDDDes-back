/*
  Warnings:

  - You are about to drop the `ComodidadeNaAcomodacao` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Acomodacao" DROP CONSTRAINT "Acomodacao_hotelId_fkey";

-- DropForeignKey
ALTER TABLE "Avaliacao_acomodacao" DROP CONSTRAINT "Avaliacao_acomodacao_acomodacaoId_fkey";

-- DropForeignKey
ALTER TABLE "Avaliacao_acomodacao" DROP CONSTRAINT "Avaliacao_acomodacao_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "Cobranca" DROP CONSTRAINT "Cobranca_reservaId_fkey";

-- DropForeignKey
ALTER TABLE "ComodidadeNaAcomodacao" DROP CONSTRAINT "ComodidadeNaAcomodacao_acomodacaoId_fkey";

-- DropForeignKey
ALTER TABLE "ComodidadeNaAcomodacao" DROP CONSTRAINT "ComodidadeNaAcomodacao_comodidadeId_fkey";

-- DropForeignKey
ALTER TABLE "Foto_Acomodacao" DROP CONSTRAINT "Foto_Acomodacao_acomodacaoId_fkey";

-- DropForeignKey
ALTER TABLE "Gerenciamento_ganhos" DROP CONSTRAINT "Gerenciamento_ganhos_proprietarioId_fkey";

-- DropForeignKey
ALTER TABLE "Gerenciamento_ganhos_acomodacao" DROP CONSTRAINT "Gerenciamento_ganhos_acomodacao_acomodacaoId_fkey";

-- DropForeignKey
ALTER TABLE "Notificacao" DROP CONSTRAINT "Notificacao_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Reserva" DROP CONSTRAINT "Reserva_acomodacaoId_fkey";

-- DropForeignKey
ALTER TABLE "Reserva" DROP CONSTRAINT "Reserva_clienteId_fkey";

-- DropTable
DROP TABLE "ComodidadeNaAcomodacao";

-- CreateTable
CREATE TABLE "__AcomodacaoToComodidade" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "__AcomodacaoToComodidade_AB_unique" ON "__AcomodacaoToComodidade"("A", "B");

-- CreateIndex
CREATE INDEX "__AcomodacaoToComodidade_B_index" ON "__AcomodacaoToComodidade"("B");

-- AddForeignKey
ALTER TABLE "Notificacao" ADD CONSTRAINT "Notificacao_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Acomodacao" ADD CONSTRAINT "Acomodacao_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "Hotel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Foto_Acomodacao" ADD CONSTRAINT "Foto_Acomodacao_acomodacaoId_fkey" FOREIGN KEY ("acomodacaoId") REFERENCES "Acomodacao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_acomodacaoId_fkey" FOREIGN KEY ("acomodacaoId") REFERENCES "Acomodacao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gerenciamento_ganhos_acomodacao" ADD CONSTRAINT "Gerenciamento_ganhos_acomodacao_acomodacaoId_fkey" FOREIGN KEY ("acomodacaoId") REFERENCES "Acomodacao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao_acomodacao" ADD CONSTRAINT "Avaliacao_acomodacao_acomodacaoId_fkey" FOREIGN KEY ("acomodacaoId") REFERENCES "Acomodacao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao_acomodacao" ADD CONSTRAINT "Avaliacao_acomodacao_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cobranca" ADD CONSTRAINT "Cobranca_reservaId_fkey" FOREIGN KEY ("reservaId") REFERENCES "Reserva"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gerenciamento_ganhos" ADD CONSTRAINT "Gerenciamento_ganhos_proprietarioId_fkey" FOREIGN KEY ("proprietarioId") REFERENCES "Proprietario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "__AcomodacaoToComodidade" ADD CONSTRAINT "__AcomodacaoToComodidade_A_fkey" FOREIGN KEY ("A") REFERENCES "Acomodacao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "__AcomodacaoToComodidade" ADD CONSTRAINT "__AcomodacaoToComodidade_B_fkey" FOREIGN KEY ("B") REFERENCES "ComodidadeAcomodacao"("id") ON DELETE CASCADE ON UPDATE CASCADE;
