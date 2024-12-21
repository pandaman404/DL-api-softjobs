import jwt from 'jsonwebtoken';
import 'dotenv/config';

const signToken = (data) => {
  return jwt.sign(data, String(process.env.JWT_SECRET), {
    algorithm: 'HS256',
    expiresIn: '24h',
  });
};

const verifyToken = (token) => {
  return jwt.verify(token, String(process.env.JWT_SECRET));
};

const decodeToken = (token) => {
  return jwt.decode(token);
};

export { signToken, verifyToken, decodeToken };
