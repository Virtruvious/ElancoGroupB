module.exports = (app) => {
    const notif = require("../Controllers/notif.controller");
    const express = require("express");
    const router = express.Router();

    router.use(express.json());
    router.get("/getNotifs", notif.getNotifs);
    router.get("/readNotif", notif.readNotif);
    router.get("/getUnwrapped", notif.getUnwrapped);

    app.use("/notifs", router);
};