import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john.doe1@example.com',
      plants: {
        create: [
          {
            name: 'Monstera',
            description: 'A beautiful plant.',
            logs: {
              create: [
                {
                  status: 'Healthy',
                  description: 'The plant is in good condition.',
                },
              ],
            },
          },
          {
            name: 'Ficus',
            description: 'Needs a lot of light.',
            logs: {
              create: [
                {
                  status: 'Healthy',
                  description: 'Growing strong.',
                },
              ],
            },
          },
        ],
      },
    },
  })

  await prisma.user.create({
    data: {
      name: 'Jane Doe',
      email: 'jane.doe2@example.com',
      plants: {
        create: [
          {
            name: 'Cactus',
            description: 'Requires minimal water.',
            logs: {
              create: [
                {
                  status: 'Healthy',
                  description: 'Doing well with little water.',
                },
              ],
            },
          },
        ],
      },
    },
  })

  console.log('Seed data have been inserted.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
