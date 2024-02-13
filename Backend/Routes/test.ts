module.exports = (app: any) => {
    const test = require('../Controllers/test');

    var router = require('express').Router();

    // Get user by username
    router.get('/user/:username', test.findByUsername);

    app.use('/api/test', router);
};