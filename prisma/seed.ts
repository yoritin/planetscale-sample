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

  await prisma.user.create({
    data: {
      name: 'John Smith',
      email: 'john.smith@example.com',
      plants: {
        create: [
          {
            name: 'Bamboo',
            description: 'Fast growing plant.',
            logs: {
              create: [
                {
                  status: 'Healthy',
                  description: 'Thriving and green.',
                },
              ],
            },
          },
          {
            name: 'Rose',
            description: 'Symbol of love and passion, needs regular watering.',
            logs: {
              create: [
                {
                  status: 'Healthy',
                  description: 'Blooming with vibrant colors.',
                },
              ],
            },
          },
          {
            name: 'Sunflower',
            description: 'Tall plant that requires full sun.',
            logs: {
              create: [
                {
                  status: 'Healthy',
                  description: 'Standing tall towards the sun.',
                },
              ],
            },
          },
          {
            name: 'Lavender',
            description: 'Fragrant and beneficial for pollinators.',
            logs: {
              create: [
                {
                  status: 'Healthy',
                  description: 'Aromatic and attracting bees.',
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
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      plants: {
        create: [
          {
            name: 'Orchid',
            description: 'Elegant and delicate flowers.',
            logs: {
              create: [
                {
                  status: 'Healthy',
                  description: 'Blooming beautifully.',
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
      name: 'Michael Brown',
      email: 'michael.brown@example.com',
      plants: {
        create: [
          {
            name: 'Fern',
            description: 'Loves shade and moisture.',
            logs: {
              create: [
                {
                  status: 'Healthy',
                  description: 'Lush and verdant.',
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
      name: 'Emma Wilson',
      email: 'emma.wilson@example.com',
      plants: {
        create: [
          {
            name: 'Succulent',
            description: 'Perfect for dry environments.',
            logs: {
              create: [
                {
                  status: 'Healthy',
                  description: 'Plump and colorful.',
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
