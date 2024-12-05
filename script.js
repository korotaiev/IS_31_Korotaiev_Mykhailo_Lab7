//TASK1
console.log("**********TASK1**********");
const showButton = document.getElementById("showButton");
showButton.addEventListener("click", function () {
  const inputText = document.getElementById("userInput").value;
  console.log(inputText);
});
//TASK3
const toggleButton = document.getElementById("toggleButton");
const inputField = document.getElementById("inputField");

toggleButton.addEventListener("click", function () {
  if (inputField.type === "text") {
    inputField.type = "password";
    toggleButton.textContent = "Розкрити";
  } else {
    inputField.type = "text";
    toggleButton.textContent = "Приховати";
  }
});
