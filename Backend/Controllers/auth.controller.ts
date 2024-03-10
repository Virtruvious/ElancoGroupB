const auth = require("../Models/auth.model");
const jwt = require("jsonwebtoken");

function generateAccessToken(param){
  return jwt.sign(param, process.env.TOKEN_SECRET, { expiresIn: '1800s'});
}

exports.checkPassword = (req, res) => {
  const { username, password } = req.body;

  if (username && password) {
    auth.checkPassword(username, password, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(401).send({
            message: "User not found",
          });
        } else if (err.kind === "invalid_password") {
          res.status(401).send({
            message: "Invalid password",
          });
        } else {
          res.status(500).send({
            message: "Error retrieving User with username " + username,
          });
        }
      } else {
        // Success, send user data and token
        const token = generateAccessToken({ id: data.id, username: data.username });
        const successfulRes = {
          user: {
            id: data.id,
            name: data.username,
          },
          token: token,
        };
        res.status(200).send(successfulRes);
      }
    });
  } else {
    res.status(400).send({
      message: "Username and password cannot be empty",
    });
  }
};

exports.registerUser = (req, res) => {
  const { username, password } = req.body;

  if (username && password) {
    auth.registerUser(username, password, (err, data) => {
      if (err) {
        if (err.kind === "duplicate") {
          res.status(409).send({
            message: "Username already exists",
          });
        } else {
          res.status(500).send({
            message: "Error creating User",
          });
        }
      } else {
        res.status(201).send(data);
      }
    });
  } else {
    res.status(400).send({
      message: "Username and password cannot be empty",
    });
  }
};