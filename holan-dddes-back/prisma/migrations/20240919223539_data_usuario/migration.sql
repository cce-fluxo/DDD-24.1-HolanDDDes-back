-- AlterTable
ALTER TABLE "Usuario" ALTER COLUMN "data_nascimento" DROP DEFAULT,
ALTER COLUMN "data_nascimento" SET DATA TYPE TIMESTAMP(3);
