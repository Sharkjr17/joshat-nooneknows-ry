//Game variables
var gdp = 30600000000000;
var pop = 342000000;
var gpc = gdp / pop;

var growthFactor = 1;

//Get stuff from intro screen
const startButton = document.getElementById("start-button");
const introScreen = document.getElementById("intro-screen-contents");

//Get game screens
const overviewScreen = document.getElementById("overview-screen");
const eventScreen = document.getElementById("event-screen");
const responseScreen = document.getElementById("response-screen");

//Get text labels
const gdpLabel = document.getElementById("gdp-label");
const popLabel = document.getElementById("pop-label");
const gpcLabel = document.getElementById("gpc-label");

//Get game buttons
const nextMonthButton = document.getElementById("next-month-button");

//Hide game screens on start
overviewScreen.style.display = "none";
eventScreen.style.display = "none";
responseScreen.style.display = "none";


//Hide intro screen on start button use
startButton.addEventListener("click", function() {
    startButton.disabled = true;
    introScreen.style.display = 'none'; // Hides the element
    overviewScreen.style.display = 'block';
});



//Clicking "Next month" button
nextMonthButton.addEventListener("click", function() {

    //Calculate new national figures

    //GDP (Increase by monthly factor using random noise and growth factor)
    const annualRate = Math.random() * ((0.012 * growthFactor) - (0.008 * growthFactor)) + 0.008;
    const monthlyFactor = Math.pow(1 + annualRate, 1 / 12);
    gdp = gdp * monthlyFactor;

    //Population
    pop += pop * 0.00150;

    //GDP per capita
    gpc = gdp / pop;

    //Change labels to reflect changes in national figures (Very complicated do not touch)
    gdpLabel.innerText = "CURRENT GDP : " + Math.round(gdp) + " ($" + (Math.round(gdp / 1000000000) / 1000) + " Trillion, " + ((Math.round(annualRate - 1) * 100000) / 1000) + "% YoY Last Month)";
    popLabel.innerText = "POPULATION : " + Math.round(pop) + " (" + (Math.round(pop / 1000) / 1000) + " Million)";
    gpcLabel.innerText = "GDP PER CAPITA : " + Math.round(gpc) + " ($" + Math.round(gpc).toLocaleString() + " per capita)";

    gdpLabel.innerText = data["Event 0"]["Title"];

    //Hide overview screen and show event screen
    overviewScreen.style.display = "block";
    eventScreen.style.display = "block";
});