const auth = require("../Models/auth.model");

exports.checkPassword = (req, res) => {
  const { username, password } = req.body;

  if (username && password) {
    auth.checkPassword(username, password, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `User ${username} does not exist.`,
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
        // Here you might want to send back a token or some indication of success
        req.session.user = data.id;
        res.send(req.session);
      }
    });
  } else {
    res.status(400).send({
        message: "Username and password cannot be empty",
    });
  }
};
