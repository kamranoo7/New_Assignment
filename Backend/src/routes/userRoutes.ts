// src/routes/userRoutes.ts

import express, { Request, Response } from 'express';
import { register, login } from '../controllers/authController';
import { protect } from '../middleware/authMiddleware';
import User from '../models/User';

// Import the AuthenticatedRequest interface
import { AuthenticatedRequest } from '../types/express/express.d'; // Correct the import path if needed

const router = express.Router();

router.post('/auth/register', register);
router.post('/auth/login', login);

// FIX: Cast the incoming 'req' object to AuthenticatedRequest
router.get('/users', protect, async (req: Request, res: Response) => {
  // Assert the type after the 'protect' middleware has run
  const authReq = req as AuthenticatedRequest; 
  
  // You can now safely access authReq.userId without an error
  console.log(`Fetching users for user ID: ${authReq.userId}`); 
  
  const users = await User.find();
  res.status(200).json(users);
});

export default router;