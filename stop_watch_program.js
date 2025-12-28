// const start = document.getElementById('startStopBtn')
// const stopBtn = document.getElementById('stopBtn')
// const reset = document.getElementById('resetBtn')

// let timer;

// function startWatch(){
//     let milliseconds = 0;
//     let seconds = 0;
//     let minutes = 0;
//     let hours = 0;

//     function startTimer(){
//         timer = setInterval(function(){
//             milliseconds+=10;
//             if(milliseconds>=1000){
//                 milliseconds = 0;
//                 seconds++;
//                 if(seconds>=60){
//                     seconds = 0;
//                     minutes++;
//                     if(minutes>=60){
//                         minutes = 0;
//                         hours++;
//                     }
//                 }
//             }
//             document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
//             document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
//             document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
//             document.getElementById('milliseconds').innerText = milliseconds.toString().padStart(2, '0');
//         }, 10);
//     }
//     startTimer();
// }

// function stopWatch(){
//     function stopTimer(){
//         clearInterval(timer);
//     };
//     stopTimer();
// }

// function resetWatch(){
//     function resetTimer(){
//         clearInterval(timer);
//         document.getElementById('hours').innerText = '00';
//         document.getElementById('minutes').innerText = '00';
//         document.getElementById('seconds').innerText = '00';
//         document.getElementById('milliseconds').innerText = '00';
//     };
//     resetTimer();
// }

// start.onclick = startWatch;
// stopBtn.onclick = stopWatch;
// reset.onclick = resetWatch;

const startBtn = document.getElementById('startStopBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const millisecondsEl = document.getElementById('milliseconds');

let timer = null;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

function renderTime() {
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
    millisecondsEl.textContent = String(milliseconds / 10).padStart(2, '0');
}

function startWatch() {
    if (timer) return; // prevent multiple intervals

    timer = setInterval(() => {
        milliseconds += 10;

        if (milliseconds === 1000) {
            milliseconds = 0;
            seconds++;

            if (seconds === 60) {
                seconds = 0;
                minutes++;

                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
        }

        renderTime();
    }, 10);
}

function stopWatch() {
    clearInterval(timer);
    timer = null;
}

function resetWatch() {
    stopWatch();
    milliseconds = seconds = minutes = hours = 0;
    renderTime();
}

startBtn.onclick = startWatch;
stopBtn.onclick = stopWatch;
resetBtn.onclick = resetWatch;