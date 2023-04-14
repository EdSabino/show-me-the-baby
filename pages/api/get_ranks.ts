import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  const games = await prisma.game.findMany({
    orderBy: {
      points: 'desc',
    },
    take: 100
  });

  return res
    .status(200)
    .json(games)
}
