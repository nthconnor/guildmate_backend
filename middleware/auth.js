import jwt from 'jsonwebtoken';

export const authenticateJWT = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        console.error('JWT verification failed:', err);
        return res.sendStatus(403);
      }
      req.userId = user.userId;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};