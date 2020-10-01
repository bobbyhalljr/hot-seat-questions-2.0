import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default function handler(req, res) {
  if (req.method === "POST") {
    const { body } = req;
    const question = prisma.post.create({ data: JSON.parse(body) });
    res.json(question);
  }
}