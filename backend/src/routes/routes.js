import { Router } from 'express';
import { asyncHandler } from '../middlewares/asyncHandler.js';
import { getProfile } from '../controllers/UserController.js';
import { login, register } from '../controllers/AuthController.js';
import { authHandler } from '../middlewares/authHandler.js';

const router = Router();

router.get('/usuarios', authHandler, asyncHandler(getProfile));
router.post('/usuarios', asyncHandler(register));
router.post('/login', asyncHandler(login));

export default router;
