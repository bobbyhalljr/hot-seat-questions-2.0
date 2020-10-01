import { PrismaClient } from '@prisma/client';


export default async function handler(req, res) {
const prisma = new PrismaClient();
    if (req.method === "POST") {
        req.headers = {
            "content-type": "application/json"
        }
        const { body } = req;
        const question = await prisma.post.create({ data: JSON.parse(body) });
        res.status(200).json(question);
      }
    console.log(error.message)
    // await prisma.$disconnect()
}