var wordsArr = ['quarter', 'twenty', 'five', 'half', 'ten', 'past', 'oclock', 'to']
var test = {h:12, m:36, s:34};

function updateTime(){
  var today = new Date();
  var time = {h:today.getHours(), m:today.getMinutes(), s:today.getSeconds()}
  return time;
}

function correctHours(input){
  if (input.m > 34) {
    input.h ++;
  }
  input.h = input.h % 12 || 12;
  return input;
}

function hourString(x){
  x.h = "hour_" + x.h;
  return x;
}

function dimHours(){
    for(var i = 1; i <= 12; i++){
        var id = "hour_" + i;
        document.getElementById(id).className= "dimmed";
    }
}
function dimMinutes(){
    wordsArr.forEach(function(word) {
        document.getElementById(word).className= "dimmed";
    });
}

function highlightHour(input){
    document.getElementById(input.h).className= "highlighted";
}

function setClock(input){
    if(0 <= input.m && 5 > input.m){
        document.getElementById('oclock').className= "highlighted";
    }
    if(4 < input.m && input.m < 35){
        document.getElementById('past').className= "highlighted";
    }
    if((4 < input.m && input.m < 10) || (24 < input.m && input.m < 30) || (34 < input.m && input.m < 40) || (54 < input.m && input.m < 60)) {
        document.getElementById('five').className= "highlighted";
    }
    if(34 < input.m && input.m < 60){
        document.getElementById('to').className= "highlighted";
    }
    if((44 < input.m && input.m < 50)||(14 < input.m && input.m < 20)){
        document.getElementById('quarter').className= "highlighted";
    }
    if((9 < input.m && input.m < 15)||(49 < input.m && input.m < 55)){
        document.getElementById('ten').className= "highlighted";
    }
    if((34 < input.m && input.m < 45)||(19 < input.m && input.m < 30)){
        document.getElementById('twenty').className= "highlighted";
    }
    if(29 < input.m && input.m < 35){
        document.getElementById('half').className= "highlighted";
    }
}
//updates backround pattern darkness to go darker when the minutes are about to change
function updateBackground(input) {
  var remainderMinutes = input.m % 5;
  var secondsPassed = (remainderMinutes * 60) + input.s;
  var fraction = (secondsPassed) / 300;
  if (secondsPassed > 150) {
    fraction = (300 - (secondsPassed)) / 300;
  }
  var middle = "0,0,0," + (0.8 - (fraction * 0.6));
  document.getElementById('pattern').style.background = "rgba(" + middle + ") url(imgs/pattern.png)";
}

var run = function(){
    var time = updateTime();
    var correctTime = correctHours(time);
    var hourStr = hourString(correctTime);
    dimHours();
    dimMinutes();
    highlightHour(hourStr);
    setClock(correctTime);
    updateBackground(correctTime);
    console.log("running")
}

var interval = setInterval(run, 1000);

//1 if clicked, 0 if off
var secretXon = 0;

//Secret function that reveals names by pressing x
document.getElementById("ex").addEventListener("click", function secretEx() {
    if (secretXon === 0) {
      secretXon = 1;
      clearInterval(interval);
      document.getElementById('rich').innerHTML = 'RICH';
      document.getElementById('sofia').innerHTML = 'SOFIA';
      document.getElementById('sofia').className = 'highlighted';
      document.getElementById('rich').className = 'highlighted';
      document.getElementById('it').className = 'dimmed';
      document.getElementById('is').className = 'dimmed';
      dimHours();
      dimMinutes();
      setTimeout(function() {
        document.getElementById('sofia').className = 'dimmed';
        document.getElementById('rich').className = 'dimmed';
        document.getElementById('rich').innerHTML = 'VERY';
        document.getElementById('rich').className = 'highlighted';
      }, 3000)
      setTimeout(function() {
        document.getElementById('sofia').className = 'dimmed';
        document.getElementById('rich').className = 'dimmed';
        document.getElementById('rich').innerHTML = 'COOL';
        document.getElementById('rich').className = 'highlighted';
      }, 4000)
      setTimeout(function() {
        document.getElementById('sofia').className = 'dimmed';
        document.getElementById('rich').className = 'dimmed';
        document.getElementById('sofia').innerHTML = 'CLOCK';
        document.getElementById('rich').innerHTML = 'RICH';
        document.getElementById('sofia').className = 'highlighted';
      }, 5000)
      setTimeout(function() {
        document.getElementById('sofia').className = 'dimmed';
        document.getElementById('rich').className = 'dimmed';
        document.getElementById('sofia').innerHTML = 'STIME';
        document.getElementById('rich').innerHTML = 'YEAH';
        document.getElementById('rich').className = 'highlighted';
      }, 6000)
      setTimeout(function() {
        document.getElementById('rich').innerHTML = 'OPCF';
          document.getElementById('it').className = 'highlighted';
          document.getElementById('is').className = 'highlighted';
          document.getElementById('sofia').className = 'dimmed';
          document.getElementById('rich').className = 'dimmed';
          interval = setInterval(run, 1000);
          secretXon = 0;
      }, 7500)
    };
});

// Backround image change by pressing the cog
var number = 1;

document.getElementById("changeBackground").addEventListener("click", function changeImage() {
  number ++;
  if (number === 9) {
    number = 1;
  }
  document.getElementById('background').style.backgroundImage = "url(imgs/" + number + ".jpg)";
  document.getElementById('changeBackground').className = "button";
  setTimeout(function(){
    document.getElementById('changeBackground').className = "cog";
  }, 500);
});
