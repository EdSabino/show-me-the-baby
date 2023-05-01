import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  try {
    const body = req.body;
    jwt.verify(body.token, 'secret');
    return res
    .status(200)
    .json({});
  } catch (e) {
    console.log(e)
    return res.status(401).send();
  }
}
