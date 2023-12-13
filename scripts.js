// Set up GitHub repo - DONE
// Create a webpage with a dynamic 16 x 16 grid of squares - USE FLEXBOX
// Currently the dynamic grid loads at 0. Should start at 16. 16 needs to be a constant
// Create the divs using JavaScript - DONE
//




const selectButton = document.querySelector(".grid-size-button button");


function gridSizePrompt() {
    let gridSize = prompt("How many squares would you like?");
    // GridSize needs to be validated for specific limits
    // Right now prompt keeps adding numbers without decreasing the values of teh grid
    let rows = gridSize;
    let columns = gridSize;


    for (let i = 0; i < rows; i++ ) {
        for (let j = 0; j < columns; j++) {
            const gridItem = document.createElement("div");
            gridItem.className = "es-grid-item";
            gridContainer.appendChild(gridItem);
            gridItem.addEventListener("mousedown", () => {
                gridItem.style.backgroundColor = "#ccc";
            });
            gridItem.addEventListener("mouseenter", () => {
                gridItem.style.backgroundColor = "#ccc";
            });
        }
    }
}
selectButton.addEventListener('click', gridSizePrompt);
const gridContainer = document.getElementById("es-grid-container");







