
//array of "minute" names
var wordsArr = ['quarter', 'twenty', 'five', 'half', 'ten', 'past', 'oclock']
// update() function to set all classes to "dimmed" and highlighted when the current time = class
// first part sets all hour elements dimmed/highlighted
var run = function update(){
//current time
    var today = new Date();
    var h = 'hour_' + (today.getHours() % 12 || 12);
    // //hours work with 24h time
    // if(today.getHours() > 12){
    //     h = "hour_" + (today.getHours() - 12);
    // }else{
    //     "hour_" + (today.getHours());
    // }
    var m = today.getMinutes();
    var s = today.getSeconds();

    for(var i = 1; i <= 12; i++){
        var id = "hour_" + i;
        document.getElementById(id).className= "dimmed";
    }
    //loops trough "minutes" and sets classes ((POSSIBLY REFACTORABLE))
    wordsArr.forEach(function(word) {
        document.getElementById(word).className= "dimmed";
    })
    if(h > 12){
        h -= 12
    };
    console.log(h)
    //sets hour to highlighted
        document.getElementById(h).className= "highlighted";

    if(0 <= m && 5 > m){
        document.getElementById('oclock').className= "highlighted";
    }

    else if(4 < m && m < 10){
        document.getElementById('five').className= "highlighted";
        document.getElementById('past').className= "highlighted";
    }
    else if(9 < m && m < 15){
        document.getElementById('ten').className= "highlighted";
        document.getElementById('past').className= "highlighted";
    }

    else if(14 < m && m < 20){
        document.getElementById('quarter').className= "highlighted";
        document.getElementById('past').className= "highlighted";
    }
    else if(19 < m && m < 25){
        document.getElementById('twenty').className= "highlighted";
        document.getElementById('past').className= "highlighted";
    }
    else if(24 < m && m < 30){
        document.getElementById('twenty').className= "highlighted";
        document.getElementById('five').className= "highlighted";
        document.getElementById('past').className= "highlighted";
    }
    else if(29 < m && m < 35){
        document.getElementById('half').className= "highlighted";
        document.getElementById('past').className= "highlighted";
    }

    else if(34 < m && m < 40){
        document.getElementById('twenty').className= "highlighted";
        document.getElementById('five').className= "highlighted";
        document.getElementById('to').className= "highlighted";
    }

    else if(39 < m && m < 45){
        document.getElementById('twenty').className= "highlighted";
        document.getElementById('to').className= "highlighted";
    }
    else if(44 < m && m < 50){
        document.getElementById('quarter').className= "highlighted";
        document.getElementById('to').className= "highlighted";
    }
    else if(49 < m && m < 55){
        document.getElementById('ten').className= "highlighted";
        document.getElementById('to').className= "highlighted";
    }
    else if(54 < m && m < 60){
        document.getElementById('five').className= "highlighted";
        document.getElementById('to').className= "highlighted";
    }
    console.log("running");
    var remainderMinutes = (m + 2.4) % 5;
    var secondsPassed = (remainderMinutes * 60) + s;
    if (secondsPassed > 150) {
      secondsPassed = 300 - secondsPassed;
    }
    var fraction = secondsPassed / 300;
    var middle = "0,0,0," + (0.15 + fraction);
    document.getElementById('pattern').style.background = "rgba(" + middle + ") url(pattern.png)";
}

setInterval(run, 1000);
