// Getting a reference to the button on the page
var chilinButton = d3.select("#chilin-click");
var excitedButton = d3.select("#excited-click");
var danceButton = d3.select("#dance-click");
var noDanceButton = d3.select("#no-dance-click");

// Create a list to store the list of feature scores
var scoreList = [];

// function pushClick(clickedID) {
//     idList.push(clickedID)
//     console.log(idList)
// };

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
};

chilinButton.on("click", function() {
    var loudnessScore = getRandomArbitrary(-40, -14);
    var energyScore = getRandomArbitrary(0, 0.3);

    scoreList.push(loudnessScore, energyScore)
    console.log(scoreList)
});

excitedButton.on("click", function() {
    var loudnessScore = getRandomArbitrary(-10, -1);
    var energyScore = getRandomArbitrary(0.5, 1);

    scoreList.push(loudnessScore, energyScore)
    console.log(scoreList)
});

danceButton.on("click", function() {
    var danceabilityScore = getRandomArbitrary(0.4, 1);

    scoreList.push(danceabilityScore)
    console.log(scoreList)
});

noDanceButton.on("click", function() {
    var danceabilityScore = getRandomArbitrary(0, 0.35);

    scoreList.push(danceabilityScore)
    console.log(scoreList)
});

