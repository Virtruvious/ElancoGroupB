const notif = require("../Models/notif.model");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

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

exports.getNotifs = (req, res) => {
  const token = req.headers.authorization.split(" ")[1];

  verifyToken(token, (err, decodedUser) => {
    if (err) {
      res.status(403).send({ message: "Invalid Token" });
    } else {
      notif.getNotifs(decodedUser, (err, data) => {
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

exports.readNotif = (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const id = req.query.id;

  verifyToken(token, (err, decodedUser) => {
    if (err) {
      res.status(403).send({ message: "Invalid Token" });
    } else {
      notif.readNotif(decodedUser, id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: "Notification not found for that user",
            });
          } else {
            res.status(500).send({
              message:
                "Error retrieving User with username " + decodedUser.username,
            });
          }
        } else {
          res.status(200).send({
            message: "Notification marked as read",
          });
        }
      });
    }
  });
};

exports.getUnwrapped = (req, res) => {
  const token = req.headers.authorization.split(" ")[1];

  verifyToken(token, (err, decodedUser) => {
    if (err) {
      // If the token is invalid
      return res.sendStatus(403);
    } else {
      notif.getUnwrapped(decodedUser, (err, data) => {
        if (err) {
          // If user is not found
          if (err.kind === "not_found") {
            res.status(404).send({
              message: "User not found",
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
    }
  });
};