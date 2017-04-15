var randomValue;
var randomValuesArray = []
var counter = 0;
var targetScore;
var wins = 0;
var losses = 0;


function ready(gameStart) {
    randomNumber();
    randomValue();
    $("#your-score").text(counter);
    $("#wins").text(wins);
    $("#losses").text(losses)
}

function randomNumber() {
    targetScore = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    $("#target-score").text(targetScore);
}

function randomValue() {
    for (i = 0; i < 4; i++) {
        var randomValue = Math.floor(Math.random() * (12) + 1);
        randomValuesArray.push(randomValue);
    }
    for (i = 0; i < randomValuesArray.length; i++) {
        $("#gem" + i).attr("data-gemvalue", randomValuesArray[i]);
    }
}

$(".gems").on("click", function() {
    var gemValue = ($(this).attr("data-gemvalue"));
    gemValue = parseInt(gemValue);
    $("#your-score").text(counter += gemValue);
    // $("#audio-click").play();
    document.getElementById("audio-click").play();

    if (counter === targetScore) {
        document.getElementById("audio-win").play();
        alert("You Win!");
        wins++;
        counter = 0;
        randomNumber();
        randomValuesArray=[];
        randomValue();
        // $("#target-score").text(targetScore);
        $("#your-score").text(counter);
        $("#wins").text(wins);
        
    }
    else if (counter >= targetScore) {
        document.getElementById("audio-lose").play();
        alert("You Lose!");
        losses++;
        counter = 0;
        randomNumber();
        randomValuesArray=[];
        randomValue();
        $("#your-score").text(counter);
        $("#losses").text(losses);

    }
})

ready()



// randomValuesArray.push(randomValue())


// randomValue()

// console.log(randomValue())

// console.log(randomValue)
// console.log(targetScore)
