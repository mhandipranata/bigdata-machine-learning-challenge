$(document).ready(function(){
    var scoreList = JSON.parse(sessionStorage.getItem("scoreList3"))
    console.log(scoreList)

    $.getJSON($SCRIPT_ROOT + "/result", {
        scoreListPassing: JSON.stringify(scoreList)
    }, function(data) {
        console.log(data)
    });
})