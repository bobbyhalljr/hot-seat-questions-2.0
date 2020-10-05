import { PrismaClient } from '@prisma/client';

export default async (req, res) => {
const prisma = new PrismaClient();
try {
    if (req.method === "POST") {
        req.headers = {
            "content-type": "application/json"
        }
        const { body } = req;
        const question = await prisma.post.create({ data: JSON.parse(body) });
        res.status(200).json(question)
        // await prisma.$disconnect()
    }
} catch(error){
    console.log(error)
}
}

