const rows= 64;
const columns = 64;
const gridContainer = document.getElementById("esGrid");
console.log(gridContainer);


    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {

            const gridItem = document.createElement("div");
            gridItem.className = 'es-grid-item';

            gridContainer.appendChild(gridItem);
        }
    }
    const gridItemCell = document.querySelector(".es-grid-item");

    gridItemCell.addEventListener('dragstart', function(){
        console.log("dragged");
    });
console.log(gridItemCell);







