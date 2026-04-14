//Game variables
var gdp = 30600000000000;
var pop = 342000000;
var gpc = gdp / pop;

//Get stuff from intro screen
const startButton = document.getElementById("start-button");
const introScreen = document.getElementById("intro-screen-contents");

//Get game screens
const overviewScreen = document.getElementById("overview-screen");

//Get text labels
const gdpLabel = document.getElementById("gdp-label");
const popLabel = document.getElementById("pop-label");
const gpcLabel = document.getElementById("gpc-label");

//Get game buttons
const nextMonthButton = document.getElementById("next-month-button");

//Hide game screens on start
overviewScreen.style.display = "none";

//Hide intro screen on start button use
startButton.addEventListener("click", function() {
    startButton.disabled = true;
    introScreen.style.display = 'none'; // Hides the element
    overviewScreen.style.display = 'block';
});

nextMonthButton.addEventListener("click", function() {
    gdp += gdp * 0.00175;
    pop += pop * 0.00150;
    gpc = gdp / pop;
    gdpLabel.innerText = "CURRENT GDP : " + gdp + " (" + 0 + "% YoY Last Quarter)";
    popLabel.innerText = "POPULATION : " + pop;
    gpcLabel.innerText = "GDP PER CAPITA : " + gpc;
});