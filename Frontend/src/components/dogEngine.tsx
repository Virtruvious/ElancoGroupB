import moment from "moment";

export function DogEngine() {
  let currentTime = moment().format("HH:mm:ss");

  let newData = {
    behaviour: "",
    stats: [
      {
        title: "Heart Rate",
        value: 0,
      },
      {
        title: "Temperature",
        value: 0,
      },
      {
        title: "Breathing Rate",
        value: 0,
      },
    ],
  };

  if (currentTime >= "06:00:00" && currentTime <= "12:00:00") {
    // Morning
    newData = switchTree(getRandomInt(1, 3));
  } else if (currentTime >= "12:00:00" && currentTime <= "18:00:00") {
    // Afternoon
    newData = switchTree(getRandomInt(1, 4));
  } else if (currentTime >= "18:00:00" && currentTime <= "22:00:00") {
    // Evening
    newData = switchTree(getRandomInt(4, 5));
  } else {
    // Night
    newData.behaviour = "Sleeping";
    newData.stats[0].value = getRandomInt(60, 75);
    newData.stats[1].value = getRandomInt(35, 38);
    newData.stats[2].value = getRandomInt(7, 18);
  }

  return newData;

  function switchTree(int: number) {
    let newData = {
      behaviour: "",
      stats: [
        {
          title: "Heart Rate",
          value: 0,
        },
        {
          title: "Temperature",
          value: 0,
        },
        {
          title: "Breathing Rate",
          value: 0,
        },
      ],
    };

    switch (int) {
      case 1:
        newData.behaviour = "Eating";
        newData.stats[0].value = getRandomInt(60, 100);
        newData.stats[1].value = getRandomInt(35, 38);
        newData.stats[2].value = getRandomInt(10, 20);
        break;
      case 2:
        newData.behaviour = "Playing";
        newData.stats[0].value = getRandomInt(110, 140);
        newData.stats[1].value = getRandomInt(35, 38);
        newData.stats[2].value = getRandomInt(20, 30);
        break;
      case 3:
        newData.behaviour = "Walking";
        newData.stats[0].value = getRandomInt(90, 120);
        newData.stats[1].value = getRandomInt(35, 38);
        newData.stats[2].value = getRandomInt(15, 25);
        break;
      case 4:
        newData.behaviour = "Normal";
        newData.stats[0].value = getRandomInt(60, 80);
        newData.stats[1].value = getRandomInt(35, 38);
        newData.stats[2].value = getRandomInt(10, 20);
      case 5:
        newData.behaviour = "Sleeping";
        newData.stats[0].value = getRandomInt(60, 75);
        newData.stats[1].value = getRandomInt(35, 38);
        newData.stats[2].value = getRandomInt(7, 18);
        break;
    }

    return newData;
  }

  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
