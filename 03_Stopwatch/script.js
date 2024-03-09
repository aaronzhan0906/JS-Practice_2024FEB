let seconds = 0;
let m_seconds = 0;
const displayMSeconds = document.getElementById("m_seconds");
const displaySeconds = document.getElementById("seconds");
const buttonStart = document.getElementById("button-start");
const buttonStop = document.getElementById("button-stop");
const buttonReset = document.getElementById("button-reset");
let interval; //store variable of timer

// binding buttonStart onclick
buttonStart.onclick = () => {
  clearInterval(interval);
  interval = setInterval(timer, 10);
};

// Stop-binding , clear previously set timer.
buttonStop.onclick = () => {
  clearInterval(interval);
};

// Reset-binding , renew HTML let timer to 00:00
buttonReset.onclick = () => {
  clearInterval(interval);
  m_seconds = 0;
  seconds = 0;
  displayMSeconds.innerHTML = `0${m_seconds}`;
  displaySeconds.innerHTML = `0${seconds}`;
};

// timer display
const timer = () => {
  m_seconds++;

  //less than 10 are prefixed with a 0 to maintain a two-digit format
  if (m_seconds <= 9) {
    displayMSeconds.innerHTML = `0${m_seconds}`;
  }

  if (m_seconds > 9) {
    displayMSeconds.innerHTML = m_seconds;
  }

  if (m_seconds > 99) {
    console.log("seconds");
    seconds++;
    displaySeconds.innerHTML = `0${seconds}`;
    m_seconds = 0;
    displayMSeconds.innerHTML = `0${m_seconds}`;
  }

  if (seconds > 9) {
    displaySeconds.innerHTML = seconds;
  }
};
