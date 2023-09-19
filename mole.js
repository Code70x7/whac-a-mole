window.onload = function () {
  setGame();
};

let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;

function setGame() {
  //set up the grid for the game board in html
  for (let i = 0; i < 9; i++) {
    //<div id="0-8"></div>
    let tile = document.createElement("div");
    // creates the divs
    tile.id = i.toString();
    // creates id's for each of the new tiles
    // i.tostring(); converts the number to a string because that's what id's need
    tile.addEventListener("click", selectTile);
    document.getElementById("board").appendChild(tile);
    // that's what tells wherrrre to place the created divs (document.createElement("div")-- so the board is the parent, and the tiles are children under the board ID
  }
  setInterval(setMole, 1000); //2000 milliseconds
  setInterval(setPlant, 2000);
}

function getRandomTile() {
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}

function setMole() {
  if (gameOver) {
    return;
  }
  if (currMoleTile) {
    currMoleTile.innerHTML = "";
  }
  let mole = document.createElement("img");
  mole.src = "./assets/monty-mole.png";
  //mole is a variable that is assigned to the image
  let num = getRandomTile();
  if (currPlantTile && currPlantTile.id == num) {
    return;
  }
  currMoleTile = document.getElementById(num);
  currMoleTile.appendChild(mole);
}

function setPlant() {
  if (gameOver) {
    return;
  }
  if (currPlantTile) {
    currPlantTile.innerHTML = "";
  }
  let plant = document.createElement("img");
  plant.src = "./assets/piranha-plant.png";
  let num = getRandomTile();
  if (currMoleTile && currMoleTile.id == num) {
    return;
  }
  currPlantTile = document.getElementById(num);
  currPlantTile.appendChild(plant);
}

function selectTile() {
  if (gameOver) {
    return;
  }
  if (this == currMoleTile) {
    score += 10;
    document.getElementById("score").innerText = score.toString();
  } else if (this == currPlantTile) {
    document.getElementById("score").innerText =
      "GAME OVER " + score.toString();
    gameOver = true;
  }
}
