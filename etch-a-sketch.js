const DEFAULT_COLOR = "black";
const DEFAULT_DIV_SIZE = 16;

function addDivs(divsToAdd) {
    const mainContainer = document.querySelector(".sketch-container");
    for (let i = 0; i < divsToAdd; i++) {
        const div = document.createElement('div');
        div.classList.add("grid-item-vertical", "item");
        mainContainer.appendChild(div);       

        for (let j = 0; j < divsToAdd; j++) {
            const div = document.createElement('div');
            const cell = document.querySelector(`.grid-item-vertical:nth-child(${i+1})`);
            div.classList.add("grid-item-horizontal", "item");
            cell.appendChild(div);
        }
    }
}

function getCellsArray() {
    let gridCells = document.querySelectorAll('.grid-item-horizontal');
    return [...gridCells];
}

function drawCells(color){
    getCellsArray().forEach((cell) => cell.addEventListener("mouseover",
    () => {
        if (color == "rainbow") {
            cell.style.backgroundColor = getRandomRGB();
        } else {
            cell.style.backgroundColor = color;
        }
    })); 
}

function getRandomRGB() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`
}

function clearGridBackGroundColors(){
    getCellsArray().forEach((cell) => (cell.style.backgroundColor = 'white'))
}

function toggleBlack() {
    drawCells('black');
}

function toggleWhite() {
    drawCells('white');
}

function toggleRainbow() {
    drawCells("rainbow");
}

function chooseGridSize() {
    size = prompt("Please choose grid size (100 is the highest)", 0)
    if (size > 100 || size < 1) {
        alert(`${size} is out of the valid limit, please enter a value between 1 - 100`)
        return;
    }
    applyGridChanges();
}

function applyGridChanges() {
    deleteAllGridCells();
    addDivs(size);
    drawCells('black');
}

function deleteAllGridCells() {
    document.querySelector('.sketch-container').innerHTML = '';
}

function initializeSketch() {
    addDivs(DEFAULT_DIV_SIZE);
    drawCells(DEFAULT_COLOR);
}

function setCellColor() {
    let colorPallet = document.querySelector('.input');
    let chosenColor;
    colorPallet.addEventListener('input', (e) => {
        color =e.target.value;
    }) 
    drawCells(color);
}

initializeSketch();

