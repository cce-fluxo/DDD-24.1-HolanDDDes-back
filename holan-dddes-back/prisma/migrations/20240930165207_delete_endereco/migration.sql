-- DropForeignKey
ALTER TABLE "Hotel" DROP CONSTRAINT "Hotel_enderecoId_fkey";

-- AddForeignKey
ALTER TABLE "Hotel" ADD CONSTRAINT "Hotel_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "Endereco"("id") ON DELETE CASCADE ON UPDATE CASCADE;
