import { PrismaClient } from '@prisma/client';

export default async (req, res) => {
    const prisma = new PrismaClient()
    req.headers = {
        "content-type": "application/json"
    }
    const questions = await prisma.post.findMany({
        orderBy: [
            {
                createdAt: 'desc'
            }
        ],
        include: {
            user: true,
        },
    })
    res.status(200).json(questions)
    await prisma.$disconnect()
}

export const config = {
    api: {
      bodyParser: false,
    },
  }