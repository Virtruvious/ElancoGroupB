module.exports = (app) => {
  const dog = require("../Controllers/dog.controller");
  const express = require("express");
  const router = express.Router();

  router.use(express.json());
  router.get("/getDashInfo", dog.getDashboardInfo);
  router.get("/getHeart-Rate", dog.getBPM);
  router.get("/getWeight", dog.getWeight);
  router.get("/getTemperature", dog.getTemperature);
  router.get("/getWaterIntake", dog.getWaterIntake);
  router.get("/getCalories", dog.getCalories);

  app.use("/dog", router);
};
