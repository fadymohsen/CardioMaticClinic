import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const patient = await prisma.patient.deleteMany();
  console.log(patient);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
