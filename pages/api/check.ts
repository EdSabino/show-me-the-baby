import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  const body = req.body;
  const correctAnswers = await prisma.answer.findMany({
    where: {
      caseId: body.caseId
    },
  });

  let points = 0;
  const result = body.answers.map((ans) => {
    const crrAnswer = correctAnswers.find((crrAns) => crrAns.id === ans.answerId);
    const resulted = {
      wasRight: crrAnswer!.isCorrect === ans.checked,
      ...crrAnswer
    };

    if (resulted.wasRight) {
      points += 1;
    } else {
      points -= 1;
    }
    return resulted;
  });

  return res
    .status(200)
    .json({
      points,
      correctAnswers: result
    })
}
