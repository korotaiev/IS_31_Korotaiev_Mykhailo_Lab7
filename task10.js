function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let btnCreate = document.querySelector("#controls button[data-create]");
let btnDestroy = document.querySelector("#controls button[data-destroy]");
let elementNumber = document.querySelector("#controls input[type='number']");
let boxesDiv = document.querySelector("#boxes");
let currentSize = 30;

btnCreate.addEventListener("click", () => {
  let num = Number(elementNumber.value);
  if (num > 0 && num <= 100 && num == Math.floor(num)) {
    createBoxes(num);
    elementNumber.value = "";
  } else {
    alert("Please enter an integer between 1 and 100.");
  }
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const currentElement = document.createElement("div");
    currentElement.style.display = "block";
    currentElement.style.width = `${currentSize}px`;
    currentElement.style.height = `${currentSize}px`;
    currentElement.style.backgroundColor = getRandomHexColor();
    currentElement.style.margin = "5px";
    boxesDiv.append(currentElement);
    currentSize += 10;
  }
}

btnDestroy.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  boxesDiv.innerHTML = "";
  currentSize = 30;
}
