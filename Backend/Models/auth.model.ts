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
        bcrypt.compare(password, rows[0].password, (err, res) => {
          if (res) {
            // console.log("Found user: ", rows[0]);
            result(null, rows[0]);
          } else {
            // Invalid password
            result({ kind: "invalid_password" }, null);
          }
        });
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

User.registerUser = (username, password, result) => {
  let saltRounds = 10;
  bcrypt.hash(password, saltRounds, (err, hash) => {
    pool
      .execute("INSERT INTO user (username, password) VALUES (?, ?)", [
        username,
        hash,
      ])
      .then(([rows]) => {
        // console.log("Created user: ", rows);
        result(null, rows);
      })
      .catch((err) => {
        if (err.code === "ER_DUP_ENTRY") {
          // Duplicate entry
          result({ kind: "duplicate" }, null);
        } else {
          console.error("Error: ", err);
          result(err, null);
        }
      });
  });
};

module.exports = User;
