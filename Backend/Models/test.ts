const pool = require("../db.ts")

// Constructor
const User = function (user) {
    this.username = user.username;
    this.password = user.password;
};

User.findByUsername = (username, result) => {
    pool.execute('SELECT * FROM user WHERE username = ?', [username])
        .then(([rows, fields]) => {
            if (rows.length) {
                console.log("Found user: ", rows[0]);
                result(null, rows[0]);
            } else {
                // Not found User with the username
                result({ kind: "not_found" }, null);
            }
        })
        .catch(err => {
            console.error("Error: ", err);
            result(err, null);
        });
};


module.exports = User;
