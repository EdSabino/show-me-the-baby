import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  const body = req.body;
  if (body.email === 'admin@admin.com' && body.password === process.env.PASSWORD) {
    return res
      .status(200)
      .json({
        token: jwt.sign({ valid: true }, 'secret')
      })
  }

  return res.status(401).send();
}
