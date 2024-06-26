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
        "SELECT id, date, title, description, markedRead, Dog_id FROM notifications WHERE Dog_id = ? ORDER BY CASE WHEN markedRead = 0 THEN 0 ELSE 1 END, date DESC;",
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

Notifs.getUnwrapped = async (user, result) => {
  const dogInfo = await findDog(user.id);

  if (dogInfo !== null) {
    let resultData = {
      steps: {
        total: 0,
        miles: 0,
        aroundGlobe: 0,
      },
      calorie: {
        totalIntake: 0,
        totalBurnt: 0,
        elephantDays: 0,
      },
      water: {
        total: 0,
        baths: 0,
      },
      breathing: {
        total: 0,
        average: 0,
        oxygen: 0,
        treeDays: 0,
      },
    };

    let slides = [];
    let dogName = dogInfo.name;

    pool
      .execute(
        "SELECT weight, steps, calorie, caloriesIntake, water, breathing FROM doglog WHERE Dog_id = ?",
        [dogInfo.id]
      )
      .then(([rows]) => {
        if (rows !== 0) {
          rows.forEach((row) => {
            resultData.steps.total += row.steps;
            resultData.calorie.totalBurnt += row.calorie;
            resultData.calorie.totalIntake += row.caloriesIntake;
            resultData.water.total += row.water / 1000;
            resultData.breathing.total += row.breathing;
          });

          // Step Calculations
          resultData.steps.miles = Math.round(resultData.steps.total / 2000);
          resultData.steps.aroundGlobe = Math.round(
            (resultData.steps.miles / 24901) * 100
          );

          slides.push({
            description: `${dogName} walked a total of ${resultData.steps.total} steps!`,
            main: `That's ${resultData.steps.miles} miles! Or ${resultData.steps.aroundGlobe}% of the globe's circumference!`,
            txtColour: "text-white",
            icon: "DogRunning",
          });

          // Calorie Calculations
          resultData.calorie.elephantDays =
            Math.round((resultData.calorie.totalBurnt / 70000) * 100) / 100;
          resultData.calorie.totalBurnt =
            Math.round(resultData.calorie.totalBurnt * 100) / 100;
          resultData.calorie.totalIntake =
            Math.round(resultData.calorie.totalIntake * 100) / 100;

          slides.push({
            description: `${dogName} ate a total of ${resultData.calorie.totalIntake} calories!`,
            main: `That's enough to feed an elephant for ${Math.round(resultData.calorie.elephantDays)} days!`,
            txtColour: "text-white",
            icon: "DogBowl",
          });

          slides.push({
            description: `${dogName} burnt a total of ${resultData.calorie.totalBurnt} calories!`,
            main: `That energy could power a lightbulb for ${Math.round(
              resultData.calorie.totalBurnt / 60 / 24 / 7
            )} weeks!`,
            txtColour: "text-white",
            icon: "DogLight",
          });

          // Water Calculations
          resultData.water.total =
            Math.round(resultData.water.total * 100) / 100;
          resultData.water.baths =
            Math.round((resultData.water.total / 80) * 100) / 100;

          slides.push({
            description: `${dogName} drank a total of ${resultData.water.total} liters of water!`,
            main: `That's enough to fill ${Math.round(resultData.water.baths)} baths!`,
            txtColour: "text-white",
            icon: "DogWater",
          });

          // Breathing Calculations
          let averageWeight =
            rows.reduce((acc, row) => acc + row.weight, 0) / rows.length;
          resultData.breathing.average = Math.round(
            resultData.breathing.total / rows.length
          );
          resultData.breathing.oxygen =
            Math.round(
              ((3.15 * averageWeight * resultData.breathing.total) / 1000) * 100
            ) / 100;
          resultData.breathing.treeDays =
            Math.round((resultData.breathing.oxygen / 274) * 100) / 100;

          slides.push({
            description: `${dogName} breathed a total of ${resultData.breathing.total} times!`,
            main: `That amount of oxygen would take 1 tree ${Math.round(resultData.breathing.treeDays)} days to produce!`,
            txtColour: "text-white",
            icon: "DogBreath",
          });

          result(null, slides);
        } else {
          return null;
        }
      });
  }
};

module.exports = Notifs;
