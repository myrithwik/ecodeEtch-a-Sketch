const container = document.getElementById("container");
const resizeButton = document.getElementById("resize");

window.addEventListener("load", setDefaultGrid(16,16));
resizeButton.addEventListener("click", changeSize);

function setDefaultGrid(size, size) {
  makeRows(size, size);
}

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.addEventListener("mouseover", changeColor);
    container.appendChild(cell).className = "grid-item";
  };
};


function changeColor(e) {
  const randomR = Math.floor(Math.random() * 256);
  const randomG = Math.floor(Math.random() * 256);
  const randomB = Math.floor(Math.random() * 256);
  e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

function changeSize() {
  let newSize = prompt("Enter new Dimensions:");

  if (newSize !== null) {
    newSize = parseInt(newSize);
    if (Number.isNaN(newSize)){
      alert("Enter a Number");
      changeSize()
    } else if (newSize < 1 || newSize > 64) {
      alert("Enter a number between 1 and 64");
      changeSize()
    } else {
      clearGrid();
      setDefaultGrid(newSize, newSize);
    }
  }
}

function clearGrid() {
  const gridArray = Array.from(container.childNodes);
  gridArray.forEach((element) => {
    container.removeChild(element);
  });
}

// setDefaultGrid();