console.log("******** script is running");

const shipData = {
  direction: 0,
  startLocation: {
    row: 1,
    col: 1,
  },
  length: 6,
};

const generateShip = (shipData) => {
  if (shipData.direction === 0) {
    for (let i = 0; i < shipData.length; i++) {
      const query = `#${shipData.startLocation.row} .${
        shipData.startLocation.col + i
      }`;
      document.querySelector(query).style.backgroundColor = "red";
    }
  }
};

generateShip(shipData);
