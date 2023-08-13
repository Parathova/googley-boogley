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
let TIME_LIMIT_FOCUS = 1500; //in seconds
let TIME_LIMIT_REST = 300;
let timePassed = -1;
let timeLeft = 0.0;
let timerInterval = null;
let withFocus = false;
let withRest = false;

function add() {
  if (withFocus == true) {
    TIME_LIMIT_FOCUS = TIME_LIMIT_FOCUS + 300;
  } else if (withRest == true) {
    TIME_LIMIT_REST = TIME_LIMIT_REST + 300;
  }
}

function subtract() {
  if (withFocus == true && timeLeft >= 0) {
    TIME_LIMIT_FOCUS = TIME_LIMIT_FOCUS - 300;
  } else if (withRest == true && timeLeft >= 0) {
    TIME_LIMIT_REST = TIME_LIMIT_REST - 300;
  } else if (TIME_LIMIT_FOCUS < 0 || TIME_LIMIT_REST < 0 ) {
    timeIsNegative();
  }
}

function reset() {
  clearInterval(timerInterval);
  if (withFocus == true ) {
   resetVarsFocus();
  } else {
    resetVarsRest();
  }
  startBtn.innerHTML = "Start";
  timer.setAttribute("stroke-dasharray", RESET_DASH_ARRAY);
  if (withFocus == true) {
    timeLabel.innerHTML = formatTime(TIME_LIMIT_FOCUS);
    focus();
  } else if (withRest  == true) {
    timeLabel.innerHTML = formatTime(TIME_LIMIT_REST);
    rest();
  }
  
}

function focus(withReset = false) {
  if (withReset) {
    resetVarsFocus();
  }
  setDisabled(focusBtn); //this isn't being executed for some reason 
  removeDisabled(restBtn);
  setTimerFocus();
  


}


function rest(withReset = false) {
  if (withReset) {
    resetVarsRest();
  }
  setDisabled(restBtn);
  removeDisabled(focusBtn);
  setTimerRest();
}

function setTimerFocus() {
  timeLabel.innerHTML = formatTime(TIME_LIMIT_FOCUS);
  setCircleDasharray(TIME_LIMIT_FOCUS); 
  
  withRest=false;
  withFocus=true;
  console.log(withRest);
}



function setTimerRest(withReset = false) {
  if (withReset) {
    resetVarsRest();
  }
  withRest=true;
  withFocus=false;
}



function start(withReset = false ) { // start is false withReset 
  setDisabled(startBtn);
  removeDisabled(stopBtn);
  if (withReset) {
    if (withFocus == true) {
    resetVarsFocus();
    } else {
      resetVarsRest();
    }
  }
   if (withRest == true) { //its always true for some reason NOW YOU WORK  
    console.log("fuck");
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
    setCircleDasharray(TIME_LIMIT_FOCUS);

    if (timeLeft === 0) { //update this legit never happens now what the fuck
      timeIsUp();
    } 
  }, 1000);
}

function startTimerRest() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT_REST - timePassed;
    timeLabel.innerHTML = formatTime(timeLeft); // this IS SUPPOSED PRINT 
    setCircleDasharray(TIME_LIMIT_REST);

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
  //timeLabel.innerHTML = formatTime(TIME_LIMIT);
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

function timeIsNegative() {
  setDisabled(startBtn);
  removeDisabled(stopBtn);
  clearInterval(timerInterval);
  let confirmReset = confirm("Your Timer would be negative! Reset?");
  if (confirmReset) {
    reset();
    
  }
}


function resetVarsFocus() {
  removeDisabled(startBtn);
  setDisabled(stopBtn);
  timePassed = -1;
  timeLeft = TIME_LIMIT_FOCUS;
  console.log(timePassed, timeLeft);
  timeLabel.innerHTML = formatTime(TIME_LIMIT_FOCUS);
}

function resetVarsRest(TIME_LIMIT) {
  removeDisabled(startBtn);
  setDisabled(stopBtn);
  timePassed = -1;
  timeLeft = TIME_LIMIT_REST;
  console.log(timePassed, timeLeft);
  timeLabel.innerHTML = formatTime(TIME_LIMIT_REST);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function calculateTimeFraction(TIME_LIMIT) {
  let rawTimeFraction = 0.0;
 if (TIME_LIMIT == TIME_LIMIT_FOCUS) {
  rawTimeFraction = timeLeft / TIME_LIMIT;
 } else {
  rawTimeFraction = timeLeft/ TIME_LIMIT;
 }
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray(TIME_LIMIT) {
  const circleDasharray = `${(
    calculateTimeFraction(TIME_LIMIT) * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  console.log("setCircleDashArray: ", circleDasharray);
  timer.setAttribute("stroke-dasharray", circleDasharray);
}