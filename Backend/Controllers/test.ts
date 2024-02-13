const test = require('../Models/test.ts');

exports.findByUsername = (req, res) => {
    const username = req.params.username;

    test.findByUsername(username, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with username ${username}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving User with username " + username
                });
            }
        } else {
            res.send(data);
        }
    });
};