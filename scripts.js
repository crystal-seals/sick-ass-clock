var t = setInterval(getTime, 60000);

// setTimeout(function(){clearInterval(t)}, 5000);

function getTime(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    console.log(h + ":" + m + ":" + s);
}
