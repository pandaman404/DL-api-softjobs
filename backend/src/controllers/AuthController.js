import { StatusCodes } from 'http-status-codes';
import { createUserInDB, getUserByCredentials, getUserByEmail } from '../services/userService.js';
import { signToken } from '../utils/jwt.js';

const register = async (req, res) => {
  const { email, password, rol, lenguage } = req.body;

  const userExists = await getUserByEmail({ email });

  if (userExists.length > 0) {
    return res.status(StatusCodes.CONFLICT).json({ message: 'Usuario ya se encuentra registrado!' });
  }

  const response = await createUserInDB({ email, password, rol, lenguage });
  return res.status(StatusCodes.OK).json({ response });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await getUserByCredentials({ email, password });

  if (!user) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Credenciales invalidas' });
  }

  const token = signToken({ email });
  return res.status(StatusCodes.OK).json({ token });
};

export { register, login };
