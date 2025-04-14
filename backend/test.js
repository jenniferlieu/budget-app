import { PrismaClient } from "./generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  await prisma.account.create({
    data: {
      name: "Cash",
      balance: 100,
    },
  });

  const allAccounts = await prisma.account.findMany();
  console.log(allAccounts);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
