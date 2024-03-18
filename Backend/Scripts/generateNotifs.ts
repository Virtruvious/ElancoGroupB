require("dotenv").config();
const pool = require("../db.ts");

let notifications = [];

pool.execute("SELECT id FROM notifications").then(([rows]) => {
  if (rows.length !== 0) {
    console.log("Notifications already generated, skipping...");
  } else {
    console.log("Generating notifications...");
    pool.execute("SELECT id FROM dog").then(([rows]) => {
      if (rows.length !== 0) {
        rows.forEach(({ id }) => {
          pool
            .execute(
              "SELECT weight, time, temperature, behaviour, bpm, breathing, calorie, caloriesIntake FROM doglog WHERE Dog_id = ?",
              [id]
            )
            .then(([rows]) => {
              if (rows.length !== 0) {
                // Finding abnormal temperature
                rows.map(({ time, temperature, behaviour }) => {
                  if (behaviour !== "Walking" && behaviour !== "Playing") {
                    if (temperature > 35) {
                      notifications.push([
                        time,
                        "High Temperature",
                        "Your dog's environment temperature is higher than normal while resting.",
                        false,
                        id,
                      ]);
                      return;
                    } else if (temperature < 18) {
                      notifications.push([
                        time,
                        "Low Temperature",
                        "Your dog's environment temperature is lower than normal while resting.",
                        false,
                        id,
                      ]);
                      return;
                    }
                  } else if (temperature > 40) {
                    notifications.push([
                      time,
                      "High Temperature",
                      "Your dog's environment temperature was higher than normal while exercising.",
                      false,
                      id,
                    ]);
                    return;
                  } else if (temperature < 15) {
                    notifications.push([
                      time,
                      "Low Temperature",
                      "Your dog's environment temperature was lower than normal while exercising.",
                      false,
                      id,
                    ]);
                    return;
                  }
                });

                // Finding abnormal bpm
                rows.map(({ time, bpm, behaviour }) => {
                  if (behaviour !== "Walking" && behaviour !== "Playing") {
                    if (bpm > 120) {
                      notifications.push([
                        time,
                        "High Heart Rate",
                        "Your dog's heart rate was high while resting.",
                        false,
                        id,
                      ]);
                      return;
                    } else if (bpm < 60) {
                      notifications.push([
                        time,
                        "Low Heart Rate",
                        "Your dog's heart rate was low while resting.",
                        false,
                        id,
                      ]);
                      return;
                    }
                  } else if (bpm > 140) {
                    notifications.push([
                      time,
                      "High Heart Rate",
                      "Your dog's heart rate was high while exercising.",
                      false,
                      id,
                    ]);
                    return;
                  } else if (bpm < 100) {
                    notifications.push([
                      time,
                      "Low Heart Rate",
                      "Your dog's heart rate was low while exercising.",
                      false,
                      id,
                    ]);
                    return;
                  }
                });

                // Finding abnormal breathing
                rows.map(({ time, breathing, behaviour }) => {
                  if (behaviour !== "Walking" && behaviour !== "Playing") {
                    if (breathing > 30) {
                      notifications.push([
                        time,
                        "High Breathing Rate",
                        "Your dog's breathing rate was high while resting.",
                        false,
                        id,
                      ]);
                      return;
                    } else if (breathing < 10)
                      notifications.push([
                        time,
                        "Low Breathing Rate",
                        "Your dog's breathing rate was low while resting.",
                        false,
                        id,
                      ]);
                  } else if (breathing > 40) {
                    notifications.push([
                      time,
                      "High Breathing Rate",
                      "Your dog's breathing rate was high while exercising.",
                      false,
                      id,
                    ]);
                    return;
                  } else if (breathing < 20) {
                    notifications.push([
                      time,
                      "Low Breathing Rate",
                      "Your dog's breathing rate was low while exercising.",
                      false,
                      id,
                    ]);
                    return;
                  }
                });

                let counter = 0;
                let totalCalories = 0;
                let totalBurn = 0;
                rows.map(({ time, calorie, caloriesIntake, weight }) => {
                  if (counter === 0) {
                    totalCalories = 0;
                    totalBurn = 0;
                  }

                  if (counter !== 24) {
                    totalCalories += caloriesIntake;
                    totalBurn += calorie;
                    counter++;
                  }

                  if (counter === 24) {
                    counter = 0;

                    // 30% Error Margin
                    let referenceIntake = generateFoodIntake(weight) * 1.3;

                    if (totalCalories > referenceIntake) {
                      notifications.push([
                        time,
                        "High Calorie Intake",
                        `Your dog's calorie intake ${Math.round(
                          totalCalories
                        )}kcal was higher than the reference intake of ${Math.round(
                          referenceIntake
                        )}kcal.`,
                        false,
                        id,
                      ]);
                    }
                  }
                });
              }
            })
            .then(() => {
              console.log("Finished Generating for Dog ID: ", id);
              let logSQL =
                "INSERT INTO notifications (date, title, description, markedRead, Dog_id) VALUES ?";
              pool.query(logSQL, [notifications], function (err, result) {
                if (err) throw err;
              });
              notifications = [];
            });
        });
      }
    });
  }
});

// Uses RER to calculate the daily calorie intake
// Assuming the dog is a healthy adult, Resting Energy Rate (RER) * 1.6 * Weight^(0.75)
let generateFoodIntake = (weight) => {
  return 112 * Math.pow(weight, 0.75);
};
