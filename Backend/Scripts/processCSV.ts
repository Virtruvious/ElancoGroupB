import * as fs from "fs";
import * as path from "path";
import { parse } from "csv-parse";
import moment from "moment";
require("dotenv").config();
let mysql = require("mysql2");
import bcrypt from "bcrypt";

// Create a connection to the database, make sure ENV variables are set
let con = mysql.createConnection({
  host: "localhost",
  user: process.env.DATABASE_USERNAME, // Set this in your .env file
  password: process.env.DATABASE_PASSWORD,
  port: 3306,
  database: "elanco",
});

let processedRecords = [];
(() => {
  const csvPath = path.resolve(__dirname, "../activityData.csv");

  const fileContent = fs.readFileSync(csvPath, "utf8");
  parse(fileContent, { columns: true }, (err, records) => {
    if (err) {
      console.error(err);
      return;
    }

    records.forEach((record) => {
      // On testing there was an empty value, this fix ensures that the rows are successfully inserted
      for (const key in record) {
        if (record[key] === "") {
          record[key] = 0;
          console.log(
            "Empty value found in " +
              key +
              " for " +
              record.DogID +
              " Setting to 0"
          );
        }
      }

      const {
        DogID,
        "Weight (kg)": Weight,
        Date,
        Hour,
        "Behaviour Pattern": BehaviourPattern,
        "Activity Level (steps)": ActivityLevel,
        "Heart Rate (bpm)": HeartRate,
        "Calorie Burn": CalorieBurn,
        "Temperature (C)": Temperature,
        "Food Intake (calories)": FoodIntake,
        "Water Intake (ml)": WaterIntake,
        "Breathing Rate (breaths/min)": BreathingRate,
        "Barking Frequency": BarkingFrequency,
      } = record;

      // Uses moment to parse the date and hour into a MySQL friendly format
      const parsedDate = moment(Date + " " + Hour, "DD/MM/YYYY H").format(
        "YYYY-MM-DD HH:mm:ss"
      );

      processedRecords.push([
        Weight,
        parsedDate,
        BehaviourPattern,
        ActivityLevel,
        HeartRate,
        CalorieBurn,
        Temperature,
        FoodIntake,
        WaterIntake,
        BreathingRate,
        BarkingFrequency,
        DogID[DogID.length - 1],
      ]);
    });

    // processedRecords.forEach((record) => {
    //   console.log(record);
    // });
  });
})();

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  // Inserting user accounts
  let userSQL = "INSERT INTO user (id, username, password) VALUES ?";
  // NOTE: Very insecure, however for sake of demonstration, we are using manual pre-hashed bcrypt passwords
  // A production system would generate passwords when using the register endpoint
  let userValues = [
    [1, "Susan", "$2b$10$Dws1PwGvuQC814NUqwenHeHcrOGBHXBPrNvTLaZIQvpTSh2YuAQKO"],
    [2, "Josh", "$2b$10$TZTjnYbLbihn9HPbC29t6.5NeMEoH0YstPjmPN3FIANw.Q5aDe8Ze"],
    [3, "Philip", "$2b$10$FZ9FVLmGZ2CW5scwBdOKnu1EHjPxMvHLsZgHRXXfQBI0DHlV6SLZa"],
  ];
  con.query(userSQL, [userValues], function (err, result) {
    if (err) throw err;
    console.log(
      "USER ACCOUNTS: Number of records inserted: " + result.affectedRows
    );
  });

  // Inserting dogs
  let dogSQL = "INSERT INTO dog (id, name, dob, User_id) VALUES ?";
  let dogValues = [
    [1, "Rex", "2018-04-30 12:00:00", 1],
    [2, "Buddy", "2020-02-06 12:00:00", 2],
    [3, "Max", "2015-11-18 12:00:00", 3],
  ];
  con.query(dogSQL, [dogValues], function (err, result) {
    if (err) throw err;
    console.log("DOGS: Number of records inserted: " + result.affectedRows);
  });

  // Inserting logs
  let logSQL =
    "INSERT INTO doglog (weight, time, behaviour, steps, bpm, calorie, temperature, caloriesIntake, water, breathing, barking, Dog_id) VALUES ?";
  con.query(logSQL, [processedRecords], function (err, result) {
    if (err) throw err;
    console.log("DOG LOGS: Number of records inserted: " + result.affectedRows);
  });

  con.end();
});
