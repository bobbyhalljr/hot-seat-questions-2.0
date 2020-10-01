import { PrismaClient } from '@prisma/client';

export default async function handler(req, res){
    // req.headers = {
    //     "content-type": "application/json"
    // }
    const prisma = new PrismaClient()
    const questions = await prisma.post.findMany({
        include: {
            user: true
        }
    })
    res.status(200).json(questions)

}