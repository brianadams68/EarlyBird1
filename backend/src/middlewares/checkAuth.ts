import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Middleware function for authentication checks
export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    // Check if authorization header is present
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized: Missing token' });
    }

    // Ensure JWT_SECRET is defined
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error('JWT_SECRET is not defined');
    }

    // Verify JWT token
    const decodedToken = jwt.verify(token, secret) as { userId: string };
    if (!decodedToken || typeof decodedToken !== 'object' || !('userId' in decodedToken)) {
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }

    // Attach userId to request object for use in subsequent middleware or route handler
    (req as any).userId = decodedToken.userId;

    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    console.error('Error in authentication middleware:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

