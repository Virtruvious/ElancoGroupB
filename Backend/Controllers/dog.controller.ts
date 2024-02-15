const dog = require("../Models/dog.model");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

// Function to verify JWT token
const verifyToken = (token, callback) => {
  jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedUser) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, decodedUser);
    }
  });
};

exports.getInfo = (req, res) => {
  const { user } = req.body;
  const token = req.headers.authorization.split(" ")[1];

  console.log(user);
  console.log(token);

  verifyToken(token, (err, decodedUser) => {
    if (err) {
      return res.sendStatus(403);
    } else {
      console.log(decodedUser);
      res.status(200).send({
        message: "Success",
        decodedUser
      });
    }
  });
};
