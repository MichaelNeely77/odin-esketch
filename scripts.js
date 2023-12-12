const selectButton = document.querySelector(".grid-size-button button");

function gridSizePrompt() {
    let gridSize = prompt("How many squares would you like?");
    let rows = gridSize;
    let columns = gridSize;

    for (let i = 0; i < rows; i++ ) {
        for (let j = 0; j < columns; j++) {
            const gridItem = document.createElement("div");
            gridItem.className = "es-grid-item";
            gridContainer.appendChild(gridItem);
            gridItem.addEventListener("mouseover", () => {
                gridItem.style.backgroundColor = "#ccc";
            });
            gridItem.addEventListener("dragenter", () => {
                gridItem.style.backgroundColor = "#ccc";
            });
        }
    }
}
selectButton.addEventListener('click', gridSizePrompt);





const gridContainer = document.getElementById("es-grid-container");







