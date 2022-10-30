console.log("******** script is running");
//document.querySelector(query).style.backgroundColor = "red"

const getRand = (max) => {
  return Math.floor(Math.random() * max);
};

// generate a ship
const placeShips = (shipData) => {
  if (shipData.direction === 0) {
    for (let i = 0; i < shipData.length; i++) {
      const query = `#row-${shipData.startLocation.row} [data="${
        shipData.startLocation.col + i
      }"]`;
      //console.log(query);
      document.querySelector(query).setAttribute("hit", 0);
    }
  } else if (shipData.direction === 1) {
    for (let i = 0; i < shipData.length; i++) {
      const query = `#row-${shipData.startLocation.row + i} [data="${
        shipData.startLocation.col
      }"]`;
      //console.log(query);
      document.querySelector(query).setAttribute("hit", 0);
    }
  }
};

const generateShipData = (n) => {
  const shipData = [];

  for (let i = 0; i < n; i++) {
    const direction = getRand(2);
    const length = getRand(6) + 2;

    const startLocation = {
      row: 0,
      col: 0,
    };

    if (direction === 0) {
      let rand = getRand(12) - length;

      while (!(rand <= 12 - length && rand > 0)) {
        rand = getRand(12) - length;
      }

      startLocation.col = rand;
      startLocation.row = getRand(12) + 1;
    } else if (direction === 1) {
      let rand = getRand(12) - length;

      while (!(rand <= 12 - length && rand > 0)) {
        rand = getRand(12) - length;
      }

      startLocation.row = rand;
      startLocation.col = getRand(12) + 1;
    }

    const shipDatum = {
      direction,
      startLocation,
      length,
    };

    shipData.push(shipDatum);
  }

  console.log(shipData);

  return shipData;
};

const ships = generateShipData(6);

for (let i = 0; i < ships.length; i++) {
  placeShips(ships[i]);
}

document
  .querySelector(".player-batteship-grid")
  .addEventListener("click", (event) => {
    if (event.target.classList.contains("cell")) {
      if (event.target.getAttribute("hit")) {
        event.target.setAttribute("hit", 1);
        event.target.style.backgroundColor = "red";
      }
    }
  });







