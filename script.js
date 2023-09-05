const minutesEl = document.querySelector("#minutes")
const segundsEl = document.querySelector("#seconds")
const milisegundosEl = document.querySelector("#milliseconds")
const start = document.querySelector("#start")
const pause = document.querySelector("#pause")
const resume = document.querySelector("#resume")
const reset = document.querySelector("#reset")

let intervalo;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

start.addEventListener("click", startTimer)

function startTimer() {
    intervalo = setInterval(() => {
        if(isPaused){
            milliseconds += 10

            if (milliseconds ===1000){
                seconds++;
                milliseconds=0;
            }
        if (seconds === 60){
            minutes++;
            seconds=0;
        }

        milisegundosEl.textContent = minutes
        segundsEl.textContent = seconds
        milisegundosEl.textContent = milliseconds
        }
    },10)
}