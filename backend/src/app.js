import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes/routes.js';
import { errorHandler } from './middlewares/ErrorHandler.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/', router);
app.use(errorHandler);

export default app;
