import pkg from 'pg';
import 'dotenv/config';

const { Pool } = pkg;
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const DB = new Pool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  allowExitOnIdle: true,
});

export default DB;
