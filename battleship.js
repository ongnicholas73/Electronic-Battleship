console.log("******** script is running");

const shipData = {
  direction: 0, // 0 horizontal, 1 vertical
  startLocation: {
    row: 1,
    col: 1,
  },
  length: 6,
};

const determineNumText = (number) => {
  let result = "";
  switch (number) {
    case 1:
      result = "one";
      break;
    case 2:
      result = "two";
      break;
    case 3:
      result = "three";
      break;
    case 4:
      result = "four";
      break;
    case 5:
      result = "five";
      break;
    case 6:
      result = "six";
      break;
    case 7:
      result = "seven";
      break;
    case 8:
      result = "eight";
      break;
    case 9:
      result = "nine";
      break;
    case 10:
      result = "ten";
      break;
    case 11:
      result = "twelve";
      break;
    default:
      break;
  }

  return result
};

// generate a ship
const generateShip = (shipData) => {
  if (shipData.direction === 0) {
    for (let i = 0; i < shipData.length; i++) {
      const query = `#${shipData.startLocation.row} .${
        determineNumText(shipData.startLocation.col)
      }`;

      console.log(query);
      document.querySelector(query).style.backgroundColor = "red";
    }
  }
};

generateShip(shipData);
