var timeInSecs;
var ticker;
var mint = " минут";
var secund = " секунд";

function startTimer(secs) {
timeInSecs = parseInt(secs);
ticker = setInterval("tick()", 1000); 
}

function tick( ) {
var secs = timeInSecs;
if (secs > 0) {
timeInSecs--; 
}
else {
clearInterval(ticker);
startTimer(15*60); // 4 minutes in seconds
}

var mins = Math.floor(secs/60);
secs %= 60;
var pretty = ( (mins < 10) ? "0" : "" ) + mins + '<div class="as">' + mint + '</div>' + " | " + ( (secs < 10) ? "0" : "" ) + secs + '<div class="as">' + secund + '</div>' ;

document.getElementById("countdown").innerHTML = pretty;
}

startTimer(15*60); // 4 minutes in seconds

//Credits to Gulzaib from Pakistan