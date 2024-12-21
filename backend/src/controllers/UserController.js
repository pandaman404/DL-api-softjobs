import { StatusCodes } from 'http-status-codes';
import { getUserByEmail } from '../services/userService.js';

const getProfile = async (req, res) => {
  const { email } = req.user;
  const user = await getUserByEmail({ email });
  return res.status(StatusCodes.OK).json(user);
};

export { getProfile };
