-- CreateTable
CREATE TABLE "Endereco" (
    "id" SERIAL NOT NULL,
    "numero" INTEGER,
    "rua" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "pais" TEXT NOT NULL,

    CONSTRAINT "Endereco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FotosHotel" (
    "id" SERIAL NOT NULL,
    "url_foto" TEXT NOT NULL,
    "hotelId" INTEGER NOT NULL,

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
    "pet" BOOLEAN NOT NULL,
    "enderecoId" INTEGER NOT NULL,
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
    "data_nascimento" DATE,
    "vip" BOOLEAN NOT NULL,

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
CREATE TABLE "ProprietarioNoInteresse" (
    "proprietarioId" INTEGER NOT NULL,
    "interesseId" INTEGER NOT NULL,

    CONSTRAINT "ProprietarioNoInteresse_pkey" PRIMARY KEY ("proprietarioId","interesseId")
);

-- CreateTable
CREATE TABLE "Cupom" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "codigo" TEXT NOT NULL,
    "desconto" DOUBLE PRECISION NOT NULL,
    "data_validade" TIMESTAMP(3) NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Cupom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClienteNoCupom" (
    "clienteId" INTEGER NOT NULL,
    "cupomId" INTEGER NOT NULL,

    CONSTRAINT "ClienteNoCupom_pkey" PRIMARY KEY ("clienteId","cupomId")
);

-- CreateTable
CREATE TABLE "Favorito" (
    "id" SERIAL NOT NULL,
    "clienteId" INTEGER NOT NULL,
    "hotelId" INTEGER NOT NULL,

    CONSTRAINT "Favorito_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ComodidadeAcomodacao" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "ComodidadeAcomodacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ComodidadeNaAcomodacao" (
    "acomodacaoId" INTEGER NOT NULL,
    "comodidadeId" INTEGER NOT NULL,

    CONSTRAINT "ComodidadeNaAcomodacao_pkey" PRIMARY KEY ("acomodacaoId","comodidadeId")
);

-- CreateTable
CREATE TABLE "ComodidadeHotel" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "ComodidadeHotel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ComodidadeNoHotel" (
    "hotelId" INTEGER NOT NULL,
    "comodidadeId" INTEGER NOT NULL,

    CONSTRAINT "ComodidadeNoHotel_pkey" PRIMARY KEY ("hotelId","comodidadeId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Descricao_detalhada_hotelId_key" ON "Descricao_detalhada"("hotelId");

-- CreateIndex
CREATE UNIQUE INDEX "Client_usuarioId_key" ON "Client"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Proprietario_usuarioId_key" ON "Proprietario"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Cobranca_reservaId_key" ON "Cobranca"("reservaId");

-- AddForeignKey
ALTER TABLE "FotosHotel" ADD CONSTRAINT "FotosHotel_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "Hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hotel" ADD CONSTRAINT "Hotel_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "Endereco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "Hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Descricao_detalhada" ADD CONSTRAINT "Descricao_detalhada_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "Hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proprietario" ADD CONSTRAINT "Proprietario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FotoUsuario" ADD CONSTRAINT "FotoUsuario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notificacao" ADD CONSTRAINT "Notificacao_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Acomodacao" ADD CONSTRAINT "Acomodacao_tipo_acomodacaoId_fkey" FOREIGN KEY ("tipo_acomodacaoId") REFERENCES "TipoAcomodacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Acomodacao" ADD CONSTRAINT "Acomodacao_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "Hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Foto_Acomodacao" ADD CONSTRAINT "Foto_Acomodacao_acomodacaoId_fkey" FOREIGN KEY ("acomodacaoId") REFERENCES "Acomodacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_acomodacaoId_fkey" FOREIGN KEY ("acomodacaoId") REFERENCES "Acomodacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gerenciamento_ganhos_acomodacao" ADD CONSTRAINT "Gerenciamento_ganhos_acomodacao_acomodacaoId_fkey" FOREIGN KEY ("acomodacaoId") REFERENCES "Acomodacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao_acomodacao" ADD CONSTRAINT "Avaliacao_acomodacao_acomodacaoId_fkey" FOREIGN KEY ("acomodacaoId") REFERENCES "Acomodacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao_acomodacao" ADD CONSTRAINT "Avaliacao_acomodacao_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cobranca" ADD CONSTRAINT "Cobranca_reservaId_fkey" FOREIGN KEY ("reservaId") REFERENCES "Reserva"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gerenciamento_ganhos" ADD CONSTRAINT "Gerenciamento_ganhos_proprietarioId_fkey" FOREIGN KEY ("proprietarioId") REFERENCES "Proprietario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProprietarioNoInteresse" ADD CONSTRAINT "ProprietarioNoInteresse_proprietarioId_fkey" FOREIGN KEY ("proprietarioId") REFERENCES "Proprietario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProprietarioNoInteresse" ADD CONSTRAINT "ProprietarioNoInteresse_interesseId_fkey" FOREIGN KEY ("interesseId") REFERENCES "Interesse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClienteNoCupom" ADD CONSTRAINT "ClienteNoCupom_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClienteNoCupom" ADD CONSTRAINT "ClienteNoCupom_cupomId_fkey" FOREIGN KEY ("cupomId") REFERENCES "Cupom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorito" ADD CONSTRAINT "Favorito_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorito" ADD CONSTRAINT "Favorito_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "Hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComodidadeNaAcomodacao" ADD CONSTRAINT "ComodidadeNaAcomodacao_acomodacaoId_fkey" FOREIGN KEY ("acomodacaoId") REFERENCES "Acomodacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComodidadeNaAcomodacao" ADD CONSTRAINT "ComodidadeNaAcomodacao_comodidadeId_fkey" FOREIGN KEY ("comodidadeId") REFERENCES "ComodidadeAcomodacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComodidadeNoHotel" ADD CONSTRAINT "ComodidadeNoHotel_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "Hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComodidadeNoHotel" ADD CONSTRAINT "ComodidadeNoHotel_comodidadeId_fkey" FOREIGN KEY ("comodidadeId") REFERENCES "ComodidadeHotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
