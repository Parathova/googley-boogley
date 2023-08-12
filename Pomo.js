//get time 
var now = new Date().getTime;
var minMiliConv = 60000;
var countDown = now + 25*minMiliConv;

//copy pasted this ngl
var minutes = Math.floor((countDown % (1000 * 60 * 60)) / (minMiliConv));
    var seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    