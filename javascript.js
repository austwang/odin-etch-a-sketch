container = document.querySelector(".container");

function randomColorValue() {
    return Math.floor(Math.random() * 255);
}

function generateGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("gridRow");
        for (let j = 0; j < gridSize; j++) {
            const element = document.createElement("div");
            element.classList.add("gridElement");
            element.addEventListener("mouseover", () => {
                element.style.backgroundColor = `rgb(${randomColorValue()},${randomColorValue()},${randomColorValue()})`;
            });
            row.appendChild(element);
        }
        container.appendChild(row);
    }
}

button = document.querySelector("button");

button.addEventListener("click", () => {
    let gridSize = prompt("Enter the number of squares per side for the new grid (Max size: 100)", 16);
    if (gridSize > 100) {
        gridSize = 100;
    }
    if (gridSize !== null) {
        while (container.hasChildNodes()) {
            container.removeChild(container.children[0]);
        }
        generateGrid(gridSize);
    }
});

generateGrid(16);