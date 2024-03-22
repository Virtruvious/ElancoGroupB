const dog = require("../Models/dog.model");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const moment = require("moment");

// Function to verify JWT token, ensures it is valid and not out of date while returning decoded user ID
const verifyToken = (token, callback) => {
  jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedUser) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, decodedUser);
    }
  });
};

// Validates date format to ensure good requests
const validateDate = (date) => {
  return moment(date, "YYYY-MM-DD HH:mm:ss", true).isValid();
};

// Returns an object with all of the information needed for the dashboard
exports.getDashboardInfo = (req, res) => {
  const token = req.headers.authorization.split(" ")[1];

  // console.log("Token: ", token)

  verifyToken(token, (err, decodedUser) => {
    if (err) {
      res.status(403).send({ message: "Invalid Token" });
    } else {
      dog.getDashboardInfo(decodedUser, (err, data) => {
        // console.log("Data: ", data);
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: "User not found",
            });
          } else {
            res.status(500).send({
              message:
                "Error retrieving User with username " + decodedUser.username,
            });
          }
        } else {
          res.status(200).send(data);
        }
      });
    }
  });
};

// Returns the all BPM logs for a given date range
exports.getBPM = (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const start = req.query.start;
  const end = req.query.end;

  verifyToken(token, (err, decodedUser) => {
    if (err) {
      // If the token is invalid
      return res.sendStatus(403);
    } else if (validateDate(start) && validateDate(end)) {
      // If the date is valid
      dog.getBPM(decodedUser, start, end, (err, data) => {
        if (err) {
          // If logs are not found
          if (err.kind === "not_found") {
            res.status(404).send({
              message: "Logs not found",
            });
          } else {
            // If there is an error
            res.status(500).send({
              message: "Error retrieving logs",
            });
          }
        } else {
          // Success, logs are found
          res.status(200).send(data);
        }
      });
    } else {
      // If the date is invalid
      return res.sendStatus(400);
    }
  });
};

exports.getWeight = (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const start = req.query.start;
  const end = req.query.end;

  verifyToken(token, (err, decodedUser) => {
    if (err) {
      // If the token is invalid
      return res.sendStatus(403);
    } else if (validateDate(start) && validateDate(end)) {
      // If the date is valid
      dog.getWeight(decodedUser, start, end, (err, data) => {
        if (err) {
          // If logs are not found
          if (err.kind === "not_found") {
            res.status(404).send({
              message: "Logs not found",
            });
          } else {
            // If there is an error
            res.status(500).send({
              message: "Error retrieving logs",
            });
          }
        } else {
          // Success, logs are found
          res.status(200).send(data);
        }
      });
    } else {
      // If the date is invalid
      return res.sendStatus(400);
    }
  });
};

exports.getTemperature = (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const start = req.query.start;
  const end = req.query.end;

  verifyToken(token, (err, decodedUser) => {
    if (err) {
      // If the token is invalid
      return res.sendStatus(403);
    } else if (validateDate(start) && validateDate(end)) {
      // If the date is valid
      dog.getTemperature(decodedUser, start, end, (err, data) => {
        if (err) {
          // If logs are not found
          if (err.kind === "not_found") {
            res.status(404).send({
              message: "Logs not found",
            });
          } else {
            // If there is an error
            res.status(500).send({
              message: "Error retrieving logs",
            });
          }
        } else {
          // Success, logs are found
          res.status(200).send(data);
        }
      });
    } else {
      // If the date is invalid
      return res.sendStatus(400);
    }
  });
};

exports.getWaterIntake = (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const start = req.query.start;
  const end = req.query.end;

  verifyToken(token, (err, decodedUser) => {
    if (err) {
      // If the token is invalid
      return res.sendStatus(403);
    } else if (validateDate(start) && validateDate(end)) {
      // If the date is valid
      dog.getWaterIntake(decodedUser, start, end, (err, data) => {
        if (err) {
          // If logs are not found
          if (err.kind === "not_found") {
            res.status(404).send({
              message: "Logs not found",
            });
          } else {
            // If there is an error
            res.status(500).send({
              message: "Error retrieving logs",
            });
          }
        } else {
          // Success, logs are found
          res.status(200).send(data);
        }
      });
    } else {
      // If the date is invalid
      return res.sendStatus(400);
    }
  });
};

exports.getCalories = (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const start = req.query.start;
  const end = req.query.end;

  verifyToken(token, (err, decodedUser) => {
    if (err) {
      // If the token is invalid
      return res.sendStatus(403);
    } else if (validateDate(start) && validateDate(end)) {
      // If the date is valid
      dog.getCalories(decodedUser, start, end, (err, data) => {
        if (err) {
          // If logs are not found
          if (err.kind === "not_found") {
            res.status(404).send({
              message: "Logs not found",
            });
          } else {
            // If there is an error
            res.status(500).send({
              message: "Error retrieving logs",
            });
          }
        } else {
          // Success, logs are found
          res.status(200).send(data);
        }
      });
    } else {
      // If the date is invalid
      return res.sendStatus(400);
    }
  });
};
