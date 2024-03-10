module.exports = (app: any) => {
    const login = require('../Controllers/auth.controller');
    const express = require('express');
    const router = express.Router();

    // Parse JSON bodies for this router
    router.use(express.json());

    router.post('/login', login.checkPassword);
    router.post('/register', login.registerUser);

    app.use('/auth', router);
};