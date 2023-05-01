import prisma from "../../lib/prisma"
import requestIp from 'request-ip';

export default async function handler(req: any, res: any) {
  try {
    const body = req.body
    const game = await prisma.game.create({
      data: {
        name: body.name,
        ip: requestIp.getClientIp(req)
      }
    });

    const cases = await prisma.case.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        finalizeMessage: true,
        answers: {
          select: {
            id: true,
            description: true,
            isCorrect: true,
            possibility1: true,
            possibility2: true,
            possibility3: true,
            reason1: true,
            reason2: true,
            reason3: true,
          },
          orderBy: {
            id: 'asc'
          }
        },
      },
      orderBy: {
        name: 'asc'
      }
    });

    res.status(200).json({
      gameId: game.id,
      cases: cases
    })
  } catch (e) {
    res.status(400).json({ error: 'Um erro inesperado ocorreu' });
  }
}
