const pool = require("../db.ts");
const bcrypt = require("bcrypt");

// Constructor
const User = function (user) {
  this.username = user.username;
};

User.checkPassword = (username, password, result) => {
  pool
    .execute("SELECT * FROM user WHERE username = ?", [username])
    .then(([rows]) => {
      if (rows.length == 1) {
        // To be used when password is hashed
        // bcrypt.compare(password, rows[0].password, (err, res) => {
        //     if (res) {
        //         console.log("Found user: ", rows[0]);
        //         result(null, rows[0]);
        //     } else {
        //         // Invalid password
        //         result({ kind: "invalid_password" }, null);
        //     }
        // });
        if (password === rows[0].password) {
          console.log("Found user: ", rows[0]);
          result(null, rows[0]);
        } else {
          // Invalid password
          result({ kind: "invalid_password" }, null);
        }
      } else {
        // Not found User with the username
        result({ kind: "not_found" }, null);
      }
    })
    .catch((err) => {
      console.error("Error: ", err);
      result(err, null);
    });
};

module.exports = User;
