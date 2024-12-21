import DB from '../db/db.js';
import format from 'pg-format';
import { hashPassword, verifyPasswords } from '../utils/bcrypt.js';

const getUserByCredentials = async ({ email, password }) => {
  const query = format('SELECT * FROM usuarios WHERE email = %L', email);
  const { rows } = await DB.query(query);

  if (rows.length > 0) {
    const user = rows[0];
    const match = verifyPasswords(password, user.password);
    if (!match) return null;
  }

  return rows;
};

const getUserByEmail = async ({ email }) => {
  const query = format('SELECT * FROM usuarios WHERE email = %L', email);
  const { rows } = await DB.query(query);
  return rows;
};

const createUserInDB = async ({ email, password, rol, lenguage }) => {
  const passwordHashed = hashPassword(password);
  const query = format(
    'INSERT INTO usuarios (email, password, rol, lenguage) VALUES (%L, %L, %L, %L) RETURNING *',
    email,
    passwordHashed,
    rol,
    lenguage
  );
  const { rows } = await DB.query(query);
  return rows;
};

export { getUserByEmail, getUserByCredentials, createUserInDB };
