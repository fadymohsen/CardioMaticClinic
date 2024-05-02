-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Patient', 'Doctor');

-- AlterTable
ALTER TABLE "Patient" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'Patient';

-- AlterTable
ALTER TABLE "Phyician" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'Doctor';
