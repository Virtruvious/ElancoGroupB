// columnRoute.ts
import express, { Request, Response } from 'express';
import { Router } from 'express';
import { getAllColumns } from '../Controllers/columnController';

const router = Router();
router.get('/api/columns', getAllColumns);
router.use((req, res, next) => {
    console.log(`In router: ${req.method}:${req.originalUrl}`);
    next();
});
router.use((err: Error, req: Request, res: Response, next: Function) => { "Error in retrieving columns" });
export default router;