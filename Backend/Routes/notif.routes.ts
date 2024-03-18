module.exports = (app: any) => {
    const notif = require("../Controllers/notif.controller");
    const express = require("express");
    const router = express.Router();

    router.use(express.json());
    router.get("/getNotifs", notif.getNotifs);
    router.post("/readNotif", notif.readNotif);

    app.use("/notifs", router);
};