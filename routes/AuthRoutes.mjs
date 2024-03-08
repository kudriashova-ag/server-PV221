import express from 'express';
import AuthController from '../controllers/AuthController.mjs';
import auth from '../middleware/auth.mjs';


const router = express.Router();

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);

router.get('/auth-user', auth, AuthController.getAuthUser);

export default router;