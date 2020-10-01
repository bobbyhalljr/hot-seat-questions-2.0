import { PrismaClient } from '@prisma/client';


export default async function handler(req, res){
    const prisma = new PrismaClient()
    req.headers = {
        "content-type": "application/json"
    }
    const questions = await prisma.post.findMany({
        include: {
            user: true
        }
    })
    res.status(200).json(questions)
    await prisma.$disconnect()
}