-- CreateTable
CREATE TABLE "FotosHotel" (
    "id" SERIAL NOT NULL,
    "url_foto" TEXT NOT NULL,
    "hotelId" INTEGER NOT NULL,
    "cloudinary_id" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "FotosHotel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hotel" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "sobre" TEXT,
    "visualizacoes" INTEGER NOT NULL DEFAULT 0,
    "informacoes_extras" TEXT,
    "pet" BOOLEAN NOT NULL DEFAULT false,
    "endereco" TEXT NOT NULL,
    "proprietarioId" INTEGER NOT NULL,

    CONSTRAINT "Hotel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Avaliacao" (
    "id" SERIAL NOT NULL,
    "custo_beneficio" INTEGER NOT NULL,
    "atendimento" INTEGER NOT NULL,
    "comida" INTEGER NOT NULL,
    "limpeza" INTEGER NOT NULL,
    "conforto" INTEGER NOT NULL,
    "localizacao" INTEGER NOT NULL,
    "comentario" TEXT,
    "hotelId" INTEGER NOT NULL,
    "clientId" INTEGER NOT NULL,

    CONSTRAINT "Avaliacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Descricao_detalhada" (
    "id" SERIAL NOT NULL,
    "sobre" TEXT,
    "banheiro" TEXT,
    "quarto" TEXT,
    "regiao" TEXT,
    "hotelId" INTEGER NOT NULL,

    CONSTRAINT "Descricao_detalhada_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "hash_senha" TEXT NOT NULL,
    "telefone" TEXT,
    "token_resetar_senha" TEXT,
    "data_nascimento" TIMESTAMP(3),
    "vip" BOOLEAN NOT NULL DEFAULT false,
    "role" TEXT,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Proprietario" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "tempo_hospedagem" INTEGER,
    "avaliacao" TEXT,
    "sobre" TEXT,

    CONSTRAINT "Proprietario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FotoUsuario" (
    "id" SERIAL NOT NULL,
    "url_foto" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "cloudinary_id" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "FotoUsuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notificacao" (
    "id" SERIAL NOT NULL,
    "mensagem" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "leitura" BOOLEAN NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notificacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Acomodacao" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT,
    "banheiros" INTEGER NOT NULL,
    "quartos" INTEGER NOT NULL,
    "camas" INTEGER NOT NULL,
    "valor_diaria" DOUBLE PRECISION NOT NULL,
    "valor_pet" DOUBLE PRECISION NOT NULL,
    "complemento" TEXT NOT NULL,
    "tipo_acomodacaoId" INTEGER NOT NULL,
    "hotelId" INTEGER NOT NULL,

    CONSTRAINT "Acomodacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoAcomodacao" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "TipoAcomodacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Foto_Acomodacao" (
    "id" SERIAL NOT NULL,
    "url_foto" TEXT NOT NULL,
    "acomodacaoId" INTEGER NOT NULL,
    "cloudinary_id" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Foto_Acomodacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reserva" (
    "id" SERIAL NOT NULL,
    "data_check_in" TIMESTAMP(3) NOT NULL,
    "data_check_out" TIMESTAMP(3) NOT NULL,
    "quantidade_pessoas" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "aceita_pet" BOOLEAN NOT NULL,
    "clienteId" INTEGER NOT NULL,
    "acomodacaoId" INTEGER NOT NULL,
    "cupomId" INTEGER,

    CONSTRAINT "Reserva_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gerenciamento_ganhos_acomodacao" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3),
    "valor_lucro" DOUBLE PRECISION,
    "acomodacaoId" INTEGER NOT NULL,

    CONSTRAINT "Gerenciamento_ganhos_acomodacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Avaliacao_acomodacao" (
    "id" SERIAL NOT NULL,
    "custo_beneficio" INTEGER NOT NULL,
    "atendimento" INTEGER NOT NULL,
    "comida" INTEGER NOT NULL,
    "limpeza" INTEGER NOT NULL,
    "conforto" INTEGER NOT NULL,
    "localizacao" INTEGER NOT NULL,
    "comentario" TEXT,
    "acomodacaoId" INTEGER NOT NULL,
    "clienteId" INTEGER NOT NULL,

    CONSTRAINT "Avaliacao_acomodacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cobranca" (
    "id" SERIAL NOT NULL,
    "data_pagamento" TIMESTAMP(3),
    "data_vencimento" TIMESTAMP(3),
    "valor" DOUBLE PRECISION,
    "status" TEXT,
    "reservaId" INTEGER NOT NULL,

    CONSTRAINT "Cobranca_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gerenciamento_ganhos" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3),
    "valor_lucro" DOUBLE PRECISION,
    "proprietarioId" INTEGER NOT NULL,

    CONSTRAINT "Gerenciamento_ganhos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Interesse" (
    "id" SERIAL NOT NULL,
    "Nome" TEXT NOT NULL,

    CONSTRAINT "Interesse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cupom" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "Status" BOOLEAN NOT NULL,
    "codigo" TEXT NOT NULL,
    "desconto" DOUBLE PRECISION NOT NULL,
    "data_validade" TIMESTAMP(3) NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Cupom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ComodidadeAcomodacao" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "ComodidadeAcomodacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ComodidadeHotel" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "ComodidadeHotel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "__CupomToCliente" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "__ClienteToHotel" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "__AcomodacaoToComodidade" (
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

-- CreateTable
CREATE TABLE "__HotelToComodidade" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Hotel_endereco_key" ON "Hotel"("endereco");

-- CreateIndex
CREATE UNIQUE INDEX "Hotel_proprietarioId_key" ON "Hotel"("proprietarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Descricao_detalhada_hotelId_key" ON "Descricao_detalhada"("hotelId");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Client_usuarioId_key" ON "Client"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Proprietario_usuarioId_key" ON "Proprietario"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Reserva_cupomId_key" ON "Reserva"("cupomId");

-- CreateIndex
CREATE UNIQUE INDEX "Cobranca_reservaId_key" ON "Cobranca"("reservaId");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_usuarioId_key" ON "Admin"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "__CupomToCliente_AB_unique" ON "__CupomToCliente"("A", "B");

-- CreateIndex
CREATE INDEX "__CupomToCliente_B_index" ON "__CupomToCliente"("B");

-- CreateIndex
CREATE UNIQUE INDEX "__ClienteToHotel_AB_unique" ON "__ClienteToHotel"("A", "B");

-- CreateIndex
CREATE INDEX "__ClienteToHotel_B_index" ON "__ClienteToHotel"("B");

-- CreateIndex
CREATE UNIQUE INDEX "__AcomodacaoToComodidade_AB_unique" ON "__AcomodacaoToComodidade"("A", "B");

-- CreateIndex
CREATE INDEX "__AcomodacaoToComodidade_B_index" ON "__AcomodacaoToComodidade"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProprietarioToInteresse_AB_unique" ON "_ProprietarioToInteresse"("A", "B");

-- CreateIndex
CREATE INDEX "_ProprietarioToInteresse_B_index" ON "_ProprietarioToInteresse"("B");

-- CreateIndex
CREATE UNIQUE INDEX "__CupomToHotel_AB_unique" ON "__CupomToHotel"("A", "B");

-- CreateIndex
CREATE INDEX "__CupomToHotel_B_index" ON "__CupomToHotel"("B");

-- CreateIndex
CREATE UNIQUE INDEX "__HotelToComodidade_AB_unique" ON "__HotelToComodidade"("A", "B");

-- CreateIndex
CREATE INDEX "__HotelToComodidade_B_index" ON "__HotelToComodidade"("B");

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

-- AddForeignKey
ALTER TABLE "Notificacao" ADD CONSTRAINT "Notificacao_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Acomodacao" ADD CONSTRAINT "Acomodacao_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "Hotel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Acomodacao" ADD CONSTRAINT "Acomodacao_tipo_acomodacaoId_fkey" FOREIGN KEY ("tipo_acomodacaoId") REFERENCES "TipoAcomodacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Foto_Acomodacao" ADD CONSTRAINT "Foto_Acomodacao_acomodacaoId_fkey" FOREIGN KEY ("acomodacaoId") REFERENCES "Acomodacao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_acomodacaoId_fkey" FOREIGN KEY ("acomodacaoId") REFERENCES "Acomodacao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_cupomId_fkey" FOREIGN KEY ("cupomId") REFERENCES "Cupom"("id") ON DELETE SET NULL ON UPDATE CASCADE;

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
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "__CupomToCliente" ADD CONSTRAINT "__CupomToCliente_A_fkey" FOREIGN KEY ("A") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "__CupomToCliente" ADD CONSTRAINT "__CupomToCliente_B_fkey" FOREIGN KEY ("B") REFERENCES "Cupom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "__ClienteToHotel" ADD CONSTRAINT "__ClienteToHotel_A_fkey" FOREIGN KEY ("A") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "__ClienteToHotel" ADD CONSTRAINT "__ClienteToHotel_B_fkey" FOREIGN KEY ("B") REFERENCES "Hotel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "__AcomodacaoToComodidade" ADD CONSTRAINT "__AcomodacaoToComodidade_A_fkey" FOREIGN KEY ("A") REFERENCES "Acomodacao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "__AcomodacaoToComodidade" ADD CONSTRAINT "__AcomodacaoToComodidade_B_fkey" FOREIGN KEY ("B") REFERENCES "ComodidadeAcomodacao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProprietarioToInteresse" ADD CONSTRAINT "_ProprietarioToInteresse_A_fkey" FOREIGN KEY ("A") REFERENCES "Interesse"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProprietarioToInteresse" ADD CONSTRAINT "_ProprietarioToInteresse_B_fkey" FOREIGN KEY ("B") REFERENCES "Proprietario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "__CupomToHotel" ADD CONSTRAINT "__CupomToHotel_A_fkey" FOREIGN KEY ("A") REFERENCES "Cupom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "__CupomToHotel" ADD CONSTRAINT "__CupomToHotel_B_fkey" FOREIGN KEY ("B") REFERENCES "Hotel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "__HotelToComodidade" ADD CONSTRAINT "__HotelToComodidade_A_fkey" FOREIGN KEY ("A") REFERENCES "ComodidadeHotel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "__HotelToComodidade" ADD CONSTRAINT "__HotelToComodidade_B_fkey" FOREIGN KEY ("B") REFERENCES "Hotel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
