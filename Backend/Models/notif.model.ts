const pool = require("../db.ts");

const Notifs = function (notif) {
  this.id = notif.id;
  this.date = notif.date;
  this.title = notif.title;
  this.description = notif.description;
  this.markedRead = notif.markedRead;
  this.Dog_id = notif.Dog_id;
};

const findDog = async (owner) => {
  return pool
    .execute("SELECT * FROM dog WHERE User_id = ?", [owner])
    .then(([rows]) => {
      if (rows.length === 1) {
        return rows[0];
      } else {
        return null;
      }
    });
};

Notifs.getNotifs = async (user, result) => {
  const dogInfo = await findDog(user.id);

  if (dogInfo !== null) {
    pool
      .execute(
        "SELECT id, date, title, description, markedRead, Dog_id FROM notifications WHERE Dog_id = ?",
        [dogInfo.id]
      )
      .then(([rows]) => {
        if (rows.length !== 0) {
          result(null, rows);
        } else {
          result({ kind: "not_found" }, null);
        }
      });
  } else {
    return null;
  }
};

Notifs.readNotif = async (user, id, result) => {
  const dogInfo = await findDog(user.id);

  if (dogInfo !== null) {
    pool
      .execute(
        "UPDATE notifications SET markedRead = 1 WHERE Dog_id = ? AND id = ?",
        [dogInfo.id, id]
      )
      .then(([rows]) => {
        if (rows.affectedRows !== 0) {
          result(null, rows);
        } else {
          result({ kind: "not_found" }, null);
        }
      });
  } else {
    return null;
  }
};

module.exports = Notifs;
