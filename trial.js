const FULL_DASH_ARRAY = 283;
const RESET_DASH_ARRAY = `-57 ${FULL_DASH_ARRAY}`;

//All buttons
let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");
let focusBtn = document.querySelector(".focus"); // new 
let restBtn = document.querySelector(".rest"); //new 

//DOM elements
let timer = document.querySelector("#base-timer-path-remaining");
let timeLabel = document.getElementById("base-timer-label");

//Time related vars
const TIME_LIMIT_FOCUS = 1500; //in seconds
const TIME_LIMIT_REST = 300;
let timePassed = -1;
let timeLeftFocus = TIME_LIMIT_FOCUS;
let timeLeftRest = TIME_LIMIT_REST;
let timerInterval = null;
let withFocus= false;
let withRest = false;

function reset() {
  clearInterval(timerInterval);
  resetVars();
  startBtn.innerHTML = "Start";
  timer.setAttribute("stroke-dasharray", RESET_DASH_ARRAY);
  if (withFocus = true) {
    timeLabel.innerHTML = formatTime(TIME_LIMIT_FOCUS);
    focus();
  } else if (withRest  = true) {
    timeLabel.innerHTML = formatTime(TIME_LIMIT_REST);
  }
  withFocus= false;
  withRest = false;
}

function focus(withReset = false) {
  if (withReset) {
    resetVars();
  }
  setDisabled(focusBtn); //this isn't being executed for some reason 
  removeDisabled(restBtn);
  setTimerFocus();
  
}

function setTimerFocus() {
  timeLabel.innerHTML = formatTime(TIME_LIMIT_FOCUS);
  setCircleDasharray(); 
  withFocus=true;
  withRest=false;
  
}

function rest(withReset = false) {
  if (withReset) {
    resetVars();
  }
  setDisabled(restBtn);
  removeDisabled(focusBtn);
  setTimerRest();
}

function setTimerRest(withReset = false) {
  if (withReset) {
    resetVars();
  }
  withRest=true;
  withFocus=false;
}



function start(withReset = false ) { // start is false withReset 
  setDisabled(startBtn);
  removeDisabled(stopBtn);
  if (withReset) {
    resetVars();
  }
   if (withRest == true) { //its always true for some reason NOW YOU WORK  
    startTimerRest();
    console.log("ARE YOU BEING FUCKING CALLED withRest = TrUE ");
  } else {
    startTimerFocus();
  }
}

function startTimerFocus() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT_FOCUS - timePassed;
    timeLabel.innerHTML = formatTime(timeLeft);
    setCircleDasharray();

    if (timeLeft === 0) { //update this legit never happens now what the fuck
      timeIsUp();
    } 
  }, 1000);
}

function startTimerRest() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT_REST - timePassed;
    timeLabel.innerHTML = formatTime(timeLeft);
    setCircleDasharray();

    if (timeLeft === 0) {
      timeIsUp();
    } 
  }, 1000);
}

//function start(withReset = false ) { // start is false withReset 
 // setDisabled(startBtn);
 // removeDisabled(stopBtn);
 // if (withReset) {
//    resetVars();
  //}
 // if (withFocus = true){
 // startTimerFocus();
 // }
//}

function stop() {
  setDisabled(stopBtn);
  removeDisabled(startBtn);
  startBtn.innerHTML = "Continue";
  clearInterval(timerInterval);
}

//function startTimer() {
 // timerInterval = setInterval(() => {
  //  timePassed = timePassed += 1;
 //  timeLeft = TIME_LIMIT - timePassed;
  //  timeLabel.innerHTML = formatTime(timeLeft);
  //  setCircleDasharray();

  //  if (timeLeft === 0) {
      //timeIsUp();
  //  }
 // }, 1000);
//}



window.addEventListener("load", () => {
  focus();
  timeLabel.innerHTML = formatTime(TIME_LIMIT);
  //timeLabel.innerHTML = formatTime(TIME_LIMIT*0.5);
  setDisabled(stopBtn);

});




//---------------------------------------------
//HELPER METHODS
//---------------------------------------------
function setDisabled(button) {
  button.setAttribute("disabled", "disabled");
}

function removeDisabled(button) {
  button.removeAttribute("disabled");
}
function timeIsUp() {
  setDisabled(startBtn);
  removeDisabled(stopBtn);
  clearInterval(timerInterval);
  let confirmReset = confirm("Your Timer's Finished! Reset?");
  if (confirmReset) {
    reset();
    
  }
}

function resetVars() {
  removeDisabled(startBtn);
  setDisabled(stopBtn);
  timePassed = -1;
  timeLeft = TIME_LIMIT;
  console.log(timePassed, timeLeft);
  timeLabel.innerHTML = formatTime(TIME_LIMIT);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  console.log("setCircleDashArray: ", circleDasharray);
  timer.setAttribute("stroke-dasharray", circleDasharray);
}
