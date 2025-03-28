import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create a default board
  const defaultBoardValues = {
    name: 'general',
    description: 'General discussion',
  };
  const defaultBoard = await prisma.board.upsert({
    where: { name: 'general', description: 'General discussion' },
    update: {},
    create: { name: 'general', description: 'General discussion' },
  });

  console.log(`Created board: ${defaultBoard.name}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
