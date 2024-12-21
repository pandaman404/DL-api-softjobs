import bcrypt from 'bcrypt';

const salt = bcrypt.genSaltSync(10);

const hashPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};

const verifyPasswords = (password, passwordHashed) => {
  return bcrypt.compareSync(password, passwordHashed);
};

export { hashPassword, verifyPasswords };
