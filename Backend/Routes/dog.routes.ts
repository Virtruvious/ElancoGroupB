module.exports = (app: any) => {
  const dog = require("../Controllers/dog.controller");
  const express = require("express");
  const router = express.Router();

  // Parse JSON bodies for this router
  router.use(express.json());

  router.post("/getDashInfo", dog.getDashboardInfo);
  router.post("/getBPM", dog.getBPM);
  router.post("/getWeight", dog.getWeight);

  app.use("/dog", router);
};