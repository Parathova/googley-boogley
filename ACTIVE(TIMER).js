
const FULL_DASH_ARRAY = 283;
const RESET_DASH_ARRAY = `-57 ${FULL_DASH_ARRAY}`;

//All buttons
let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");
let focusBtn = document.querySelector(".focus"); // new 
let restBtn = document.querySelector(".rest"); //new 
let addBtn = document.querySelector(".add");
let subBtn = document.querySelector(".subtract");

const audioPlayer = document.getElementById('audioRingPlayer');


//DOM elements
let timer = document.querySelector("#base-timer-path-remaining");
let timeLabel = document.getElementById("base-timer-label");

//Time related vars
const focusTime = 1500;
const restTime = 3;

let TIME_LIMIT = 1500; //in seconds

let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let started = false; //keeps track of if the timer is running or not

function reset() {
  started = false;
  clearInterval(timerInterval);
  resetVars();
  startBtn.innerHTML = "Start";
  timer.setAttribute("stroke-dasharray", RESET_DASH_ARRAY);
}

function start(withReset = false) {
  started = true;

  setDisabled(startBtn);
  removeDisabled(stopBtn);

  
  
  setDisabled(addBtn);
  setDisabled(subBtn);



  if (withReset) {
    resetVars();
  }
  startTimer();


}

function stop() {
started = false;

  setDisabled(stopBtn);
  removeDisabled(startBtn);
  startBtn.innerHTML = "Continue";
  clearInterval(timerInterval);
  
  removeDisabled(addBtn);
  removeDisabled(subBtn);
}

function focus1(){
  console.log("FOCUSED");
  //stop();
  TIME_LIMIT = focusTime;
  reset();

  setDisabled(focusBtn);
  removeDisabled(restBtn);

}

function rest(){
  console.log("REST");
  stop();
  TIME_LIMIT = restTime;
  reset();

  setDisabled(restBtn);
  removeDisabled(focusBtn);
}

function add(){
  timeLeft += 300;
  TIME_LIMIT += 300;
  timeLabel.innerHTML = formatTime(timeLeft);
}

function subtract(){


  if(timeLeft > 300) {
    timeLeft -= 300;
    TIME_LIMIT -= 300;
  }
  else{
    let confirmReset = alert("You cannot reduce the timer further.");
  }
  timeLabel.innerHTML = formatTime(timeLeft);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    timeLabel.innerHTML = formatTime(timeLeft);
    setCircleDasharray();

    if (timeLeft === 0) {
      timeIsUp();
    }
  }, 1000);
}

startBtn.addEventListener("click", () => start());
stopBtn.addEventListener("click", () => stop());
resetBtn.addEventListener("click", () => reset());

focusBtn.addEventListener("click", () => focus1());
restBtn.addEventListener("click", () => rest());
subBtn.addEventListener("click", () => subtract());
addBtn.addEventListener("click", () => add());


window.addEventListener("load", () => {
  focus();
  timeLabel.innerHTML = formatTime(TIME_LIMIT);
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
  removeDisabled(addBtn);
  removeDisabled(subBtn);

  setDisabled(startBtn);
  removeDisabled(stopBtn);

  audioPlayer.play();


  clearInterval(timerInterval);
  let confirmReset = confirm("Time is UP! Wanna restart?");
  audioPlayer.play();

  if (confirmReset) {
    reset();
    startTimer();
  } else {
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
