import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/client";

const prisma = new PrismaClient();

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  const { question, description, language } = req.body;

  const session = await getSession({ req });
  const result = await prisma.post.create({
    data: {
      title: title,
      description: description,
      language, language,
      author: { connect: { email: session?.user?.email } },
    },
  });
  res.json(result);
}