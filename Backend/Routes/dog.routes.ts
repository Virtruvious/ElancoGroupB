module.exports = (app: any) => {
    const dog = require('../Controllers/dog.controller');
    const express = require('express');
    const router = express.Router();

    // Parse JSON bodies for this router
    router.use(express.json());

    router.post('/getinfo', dog.getInfo);
    // router.post('/getRangeLogs', dog.getLogs);
    // router.post('/getAllLogs', dog.getAllLogs);
    // router.post('getYearlyAvgs', dog.getYearlyAvgs);

    app.use('/dog', router);
};