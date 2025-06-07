function pad(n) {
  return n < 10 ? '0' + n : n;
}

let timer;
let seconds = 0;

function updateTimer() {
  seconds++;
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  document.getElementById('timer').innerText = pad(mins) + ':' + pad(secs);
}

function startTimer() {
  if (!timer) {
    timer = setInterval(updateTimer, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);

document.getElementById('next').addEventListener('click', () => {
  fetch('/question')
    .then(r => r.json())
    .then(data => {
      document.getElementById('question').innerText = data.question;
    });
});
