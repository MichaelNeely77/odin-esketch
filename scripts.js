


const rows = 16;
const columns = 16;

const gridContainer = document.getElementById("es-grid-container");


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




