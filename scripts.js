// Set up GitHub repo - DONE
// Create a webpage with a dynamic 16 x 16 grid of squares - USE FLEXBOX
// Currently the dynamic grid loads at 0. Should start at 16. 16 needs to be a constant
// Create the divs using JavaScript - DONE
//

/* Possible solution to making teh grid the same size is something like gridContainer.innerWidth / gridSize maybe?
*/

document.addEventListener('DOMContentLoaded', intitializeGrid);

function intitializeGrid() {
    buildGrid(16);
}


const containerWidth = document.getElementById('es-grid-container').clientWidth;

const gridContainer = document.getElementById("es-grid-container");
let color = 'black';
let clicked = true;

function buildGrid(size) {
    const totalSquares = size * size;
    const gridItemSize = containerWidth / size;
    if (size < 16) {
        alert("16 is minimum grid size.");
        resetGrid();
    }   else if (size > 200) {
        alert("200 is the maximum.");
        resetGrid();
    } else{
        for(let i = 0; i < totalSquares; i++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('es-grid-item');
            gridItem.style.width = `${gridItemSize}px`;
            gridItem.style.height = `${gridItemSize}px`;
            gridContainer.appendChild(gridItem);
            gridItem.addEventListener('mouseover', colorSquare);
        }

    }
}

function colorSquare() {
    if (clicked) {
        if (color === 'random') {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            this.style.backgroundColor = "#" + randomColor;
        } else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice) {
        color = choice;
}


const selectBtn = document.querySelector(".grid-size-button button");
selectBtn.addEventListener('click', () => {
    gridContainer.innerHTML = '';

    let gridSize = prompt("How many squares would you like?");
    buildGrid(gridSize);
});


function resetGrid() {
    gridContainer.innerHTML = '';
    buildGrid(16);
}

const resetBtn = document.querySelector('.reset-button-container button');
resetBtn.addEventListener('click', resetGrid);

document.querySelector('body').addEventListener('click', () => {
    clicked = !clicked;
});




















