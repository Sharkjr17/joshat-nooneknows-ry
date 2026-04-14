// 1. Select the button using its ID
const startButton = document.getElementById("start-button");

// 2. Add a 'click' event listener
startButton.addEventListener("click", function() {
    alert("Button was clicked!");
    startButton.disabled = true;
});