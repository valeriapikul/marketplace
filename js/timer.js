var timeInSecss;
var tickerr;
var mintt = " минут";
var secundd = " секунд";

function startTimerr(secss) {
timeInSecss = parseInt(secss);
tickerr = setInterval("tickk()", 1000); 
}

function tickk( ) {
var secss = timeInSecss;
if (secss > 0) {
timeInSecss--; 
}
else {
clearInterval(tickerr);
startTimerr(15*60); // 4 minutes in seconds
}

var minss = Math.floor(secss/60);
secss %= 60;
var prettyy = ( (minss < 10) ? "0" : "" ) + minss + '<div class="as">' + mintt + '</div>' + " | " + ( (secss < 10) ? "0" : "" ) + secss + '<div class="as">' + secundd + '</div>' ;

document.getElementById("countbown").innerHTML = prettyy;
}

startTimerr(15*60); // 4 minutes in seconds

//Credits to Gulzaib from Pakistan