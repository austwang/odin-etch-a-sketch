container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add("gridRow");
    for (let j = 0; j < 16; j++) {
        const element = document.createElement("div");
        element.classList.add("gridElement");
        row.appendChild(element);
    }
    container.appendChild(row);
}