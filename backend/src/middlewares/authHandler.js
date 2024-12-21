import { StatusCodes } from 'http-status-codes';
import { verifyToken } from '../utils/jwt.js';

export const authHandler = (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) throw new Error();
    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Token inválido' });
  }
};
