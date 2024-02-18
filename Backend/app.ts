import express, { Request, Response } from "express";
import session from 'express-session';
import apiMiddleware from '../Frontend/apiMiddleware'; // Add the missing import statement

const app = express();

app.use(session({
    secret: "elanco-activity-monitor",
    resave: false,
    saveUninitialized: true
}));
//app.use(apiMiddleware)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Elanco Activity Monitor API' });
});
import router from './Routes/columnRoute';
app.get('/api/columns', router);
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});
app.use((err: Error, req: Request, res: Response, next: Function) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});
//require('./Routes/test')(app);
//require('./Routes/auth.routes')(app);

const port = 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});