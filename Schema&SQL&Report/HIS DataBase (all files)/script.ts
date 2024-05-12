import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.patient.deleteMany();
  await prisma.phyician.deleteMany();
  await prisma.prescription.deleteMany();
  await prisma.appointment.deleteMany();
  await prisma.medicalRecord.deleteMany();
  await prisma.test.deleteMany();
  await prisma.treatment.deleteMany();
  await prisma.diagnosis.deleteMany();
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
