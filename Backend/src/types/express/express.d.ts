// src/types/express/index.d.ts

import { Request } from 'express';

// Extend the Express Request interface
declare global {
  namespace Express {
    interface Request {
      userId?: string; // Add the custom property
    }
  }
}

// You can optionally export an interface if you prefer importing it
export interface AuthenticatedRequest extends Request {
  userId: string;
}