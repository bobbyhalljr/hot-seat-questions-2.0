import { PrismaClient } from "@prisma/client";

export default async (req, res) => {
  const prisma = new PrismaClient();
  req.headers = {
    "content-type": "application/json",
  };
  const questions = await prisma.post.findMany();
  res.status(200).json(questions);
};
