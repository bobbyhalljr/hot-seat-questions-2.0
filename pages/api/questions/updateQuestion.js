import { PrismaClient } from '@prisma/client'

// export default async (req, res) => {
//     const prisma = new PrismaClient()

//     try {
//         if (req.method === "POST") {
//             req.headers = {
//                 "content-type": "application/json"
//             }
//             const { id, body } = req;
//             const updatedQuestion = await prisma.post.update({ 
//                 where: {
//                     id
//                 },
//                 data: JSON.parse(body)
//             });
//             res.status(200).json(updatedQuestion)
//             // await prisma.$disconnect()
//         }
//     } catch(error){
//         console.log(error)
//     }
// }

// export const 

export default (req, res) => {
    const { method } = req
    switch (method) {
      case 'GET':
        // handleGet()
        break
      case 'POST':
        const {id, body } = req;
            const updatedQuestion = prisma.post.update({ 
                where: {
                    id
                },
                data: JSON.parse(body)
            });
            res.status(200).json(updatedQuestion)
        break
      default:
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).end(`Method ${method} Not Allowed`)
  }
}