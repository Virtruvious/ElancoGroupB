// apiMiddleware.ts
import { Request, Response, NextFunction } from 'express';

const apiMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Check if the request URL starts with /api
  if (req.url.startsWith('/api')) {
    // Proceed to the next middleware or route handler
    next();
  } else {
    // Send a 404 Not Found response
    res.status(404).json({ message: 'Route not found' });
  }
};

export default apiMiddleware;