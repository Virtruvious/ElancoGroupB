const pool = require("../db.ts");

// Constructor
const Dog = function (dog) {
  this.name = dog.name;
  this.owner = dog.owner;
};

const findDog = async (owner) => {
  return pool
    .execute("SELECT * FROM dog WHERE User_id = ?", [owner])
    .then(([rows]) => {
      if (rows.length === 1) {
        //console.log(rows);
        return rows[0]; // Returning the first row
      } else {
        // Not found Dog with that owner
        return null;
      }
    });
};

Dog.getDashboardInfo = async (user, result) => {
  const dogInfo = await findDog(user.id);

  // console.log("Dog ID: ", dogInfo.id);

  let dataResult = {
    dogInfo: {
      name: dogInfo.name,
      dob: dogInfo.dob,
    },
    bpm: {
      average: "",
      max: "",
      min: "",
    },
    caloriesBurnt: {
      average: "",
      max: "",
      min: "",
    },
    temperature: {
      average: "",
      max: "",
      min: "",
    },
    behaviour: {
      normal: 0,
      sleeping: 0,
      eating: 0,
      walking: 0,
      playing: 0,
    },
    steps: {
      average: "",
      max: "",
      min: "",
    },
    carloriesIntake: {
      average: "",
      max: "",
      min: "",
    },
    water: {
      average: "",
      max: "",
      min: "",
    },
  };

  if (dogInfo.id !== null) {
    pool
      .execute(
        "SELECT * FROM doglog WHERE Dog_id = ? AND time > '2023-01-01 00:00:00'",
        [dogInfo.id]
      )
      .then(([rows]) => {
        if (rows.length !== 0) {
          // Data found
          let bpm,
            calories,
            counter = 0,
            total = 0,
            caloriesDays = [],
            steps,
            carloriesIntake,
            temperature,
            water,
            behaviour;

          // Extracting data from the rows
          // Array of bpm values
          bpm = rows.map((row) => row.bpm);

          // Array of calorie values
          calories = rows.map((row) => row.calorie);
          // Calculating the calories per day
          calories.map((row) => {
            if (counter === 24) {
              caloriesDays.push(total);
              total = 0;
              counter = 0;
            }

            total += row;
            counter++;
          });

          // Array of temperature values
          temperature = rows.map((row) => row.temperature);

          // Array of behaviour values
          behaviour = rows.map((row) => row.behaviour.toLowerCase());

          // Array of steps values
          steps = rows.map((row) => row.steps);
          steps = steps.filter((s) => s !== 0);

          // Array of water intake values
          water = rows.map((row) => row.water);
          water = water.filter((w) => w !== 0);

          // Assigning BPM values to the result
          dataResult.bpm.min = Math.min(...bpm).toString();
          dataResult.bpm.max = Math.max(...bpm).toString();
          dataResult.bpm.average = (
            bpm.reduce((a, b) => a + b, 0) / bpm.length
          ).toFixed(2);

          // Assigning calories values to the result
          dataResult.caloriesBurnt.min = Math.min(...caloriesDays)
            .toFixed(2)
            .toString();
          dataResult.caloriesBurnt.max = Math.max(...caloriesDays)
            .toFixed(2)
            .toString();
          dataResult.caloriesBurnt.average = (
            calories.reduce((a, b) => a + b, 0) / caloriesDays.length
          ).toFixed(2);

          // Assigning temperature values to the result
          dataResult.temperature.min = Math.min(...temperature)
            .toFixed(2)
            .toString();
          dataResult.temperature.max = Math.max(...temperature)
            .toFixed(2)
            .toString();
          dataResult.temperature.average = (
            temperature.reduce((a, b) => a + b, 0) / temperature.length
          ).toFixed(2);

          // Assigning behaviour values to the result
          dataResult.behaviour.normal = behaviour.filter(
            (b) => b === "normal"
          ).length;
          dataResult.behaviour.sleeping = behaviour.filter(
            (b) => b === "sleeping"
          ).length;
          dataResult.behaviour.eating = behaviour.filter(
            (b) => b === "eating"
          ).length;
          dataResult.behaviour.walking = behaviour.filter(
            (b) => b === "walking"
          ).length;
          dataResult.behaviour.playing = behaviour.filter(
            (b) => b === "playing"
          ).length;

          // Assigning steps values to the result
          dataResult.steps.min = Math.min(...steps).toString();
          dataResult.steps.max = Math.max(...steps).toString();
          dataResult.steps.average = (
            steps.reduce((a, b) => a + b, 0) / steps.length
          ).toFixed(2);

          // Assigning water intake values to the result
          dataResult.water.min = Math.min(...water)
            .toFixed(2)
            .toString();
          dataResult.water.max = Math.max(...water)
            .toFixed(2)
            .toString();
          dataResult.water.average = (
            water.reduce((a, b) => a + b, 0) / water.length
          ).toFixed(2);

          //Assigning carlories intake values to the result
          carloriesIntake = rows.map((row) => row.caloriesIntake);
          dataResult.carloriesIntake.min = Math.min(...carloriesIntake)
            .toFixed(2)
            .toString();
          dataResult.carloriesIntake.max = Math.max(...carloriesIntake)
            .toFixed(2)
            .toString();
          dataResult.carloriesIntake.average = (
            carloriesIntake.reduce((a, b) => a + b, 0) / carloriesIntake.length
          ).toFixed(2);
          result(null, dataResult);
        } else {
          // Not found Doglogs with that owner
          result({ kind: "not_found" }, null);
        }
      });
  } else {
    return null;
  }
};

Dog.getBPM = async (user, start, end, result) => {
  const dogInfo = await findDog(user.id);

  if (dogInfo !== null) {
    pool
      .execute(
        "SELECT * FROM doglog WHERE Dog_id = ? AND time BETWEEN ? AND ?",
        [dogInfo.id, start, end]
      )
      .then(([rows]) => {
        if (rows.length !== 0) {
          let resultData = [];

          resultData = rows.map((row) => {
            return {
              time: row.time,
              bpm: row.bpm,
            };
          });

          result(null, resultData);
        } else {
          // Not found Doglogs with that owner
          result({ kind: "not_found" }, null);
        }
      });
  } else {
    return null;
  }
};

Dog.getWeight = async (user, start, end, result) => {
  const dogInfo = await findDog(user.id);

  if (dogInfo !== null) {
    pool
      .execute(
        "SELECT * FROM doglog WHERE Dog_id = ? AND time BETWEEN ? AND ?",
        [dogInfo.id, start, end]
      )
      .then(([rows]) => {
        if (rows.length !== 0) {
          let resultData = [];
          let counter = 24;

          // Add each day to the result
          rows.map((row) => {
            if (counter != 24) {
              counter++;
            } else {
              counter = 0;
              resultData.push({
                time: row.time,
                weight: row.weight,
              });
            }
          });

          result(null, resultData);
        } else {
          // Not found Doglogs with that owner
          result({ kind: "not_found" }, null);
        }
      });
  } else {
    return null;
  }
};

Dog.getTemperature = async (user, start, end, result) => {
  const dogInfo = await findDog(user.id);

  if (dogInfo !== null) {
    pool
      .execute(
        "SELECT * FROM doglog WHERE Dog_id = ? AND time BETWEEN ? AND ?",
        [dogInfo.id, start, end]
      )
      .then(([rows]) => {
        if (rows.length !== 0) {
          let resultData = [];

          resultData = rows.map((row) => {
            return {
              time: row.time,
              temperature: row.temperature.toFixed(2),
            };
          });

          result(null, resultData);
        } else {
          // Not found Doglogs with that owner
          result({ kind: "not_found" }, null);
        }
      });
  } else {
    return null;
  }
};

Dog.getWaterIntake = async (user, start, end, result) => {
  const dogInfo = await findDog(user.id);

  if (dogInfo !== null) {
    pool
      .execute(
        "SELECT * FROM doglog WHERE Dog_id = ? AND time BETWEEN ? AND ?",
        [dogInfo.id, start, end]
      )
      .then(([rows]) => {
        if (rows.length !== 0) {
          let resultData = [];

          resultData = rows.map((row) => {
            return {
              time: row.time,
              waterIntake: row.water.toFixed(2),
            };
          });

          result(null, resultData);
        } else {
          // Not found Doglogs with that owner
          result({ kind: "not_found" }, null);
        }
      });
  } else {
    return null;
  }
};

Dog.getFoodIntake = async (user, start, end, result) => {
  const dogInfo = await findDog(user.id);

  if (dogInfo !== null) {
    pool
      .execute(
        "SELECT * FROM doglog WHERE Dog_id = ? AND time BETWEEN ? AND ?",
        [dogInfo.id, start, end]
      )
      .then(([rows]) => {
        if (rows.length !== 0) {
          let resultData = [];

          resultData = rows.map((row) => {
            return {
              time: row.time,
              caloriesIntake: row.caloriesIntake.toFixed(2),
              caloriesBurnt: "-" + row.calorie.toFixed(2),
            };
          });

          result(null, resultData);
        } else {
          // Not found Doglogs with that owner
          result({ kind: "not_found" }, null);
        }
      });
  } else {
    return null;
  }
};

module.exports = Dog;
