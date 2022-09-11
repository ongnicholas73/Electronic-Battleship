console.log("******** script is running");

const getRand = (max) => {
  return Math.floor(Math.random() * max); 
}

console.log(getRand(2))

const generateShipData = () => {
  const shipData = [];

  for (let i = 0; i < 6; i++) {    
    const shipDatum = {
      direction: getRand(2), // 0 horizontal, 1 vertical
      startLocation: {
        row: getRand(12) + 1,
        col: getRand(12) + 1,
      },
      length: getRand(6) + 1,
    };

    shipData.push(shipDatum)
  }

  return shipData;
}

console.log(generateShipData())

// generate a ship
const placeShips = (shipData) => {
  if (shipData.direction === 0) {
    for (let i = 0; i < shipData.length; i++) {
      const query = `#row-${shipData.startLocation.row} [data="${shipData.startLocation.row + i}"]`;
      console.log(query);
      if (document.querySelector(query)) {
        document.querySelector(query).style.backgroundColor = "red";
      }
    }
  } else if (shipData.direction === 1) {
    for (let i = 0; i < shipData.length; i++) {
      const query = `#row-${shipData.startLocation.row + i} [data="${shipData.startLocation.col}"]`;
      console.log(query);
      if (document.querySelector(query)) {
        document.querySelector(query).style.backgroundColor = "red";
      }
    }
  }
};

// const generateShipData = (numOfShips) => {
//   const shipData = [];
//   for (let i = 0; i < numOfShips; i++) {
//     const direction = getRand(2);
//     const length = getRand(6) + 1;
//   }
// }

const ships = generateShipData();

for (let i = 0; i < ships.length; i++) {
  placeShips(ships[i]);
}