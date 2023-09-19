window.onload = function () {
  setGame();
};

function setGame() {
  //set up the grid for the game board in html
  for (let i = 0; i < 9; i++) {
    //<div id="0-8"></div>
    let tile = document.createElement("div");
    // creates the divs
    tile.id = i.toString();
    // creates id's for each of the new tiles
    // i.tostring(); converts the number to a string because that's what id's need
    document.getElementById("board").appendChild(tile);
    // that's what tells wherrrre to place the created divs (document.createElement("div")-- so the board is the parent, and the tiles are children under the board ID
  }
}
