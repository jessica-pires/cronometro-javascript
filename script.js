const minutesEl = document.querySelector("#minutes")
const segundsEl = document.querySelector("#seconds")
const milisegundosEl = document.querySelector("#milliseconds")
const start = document.querySelector("#start")
const pause = document.querySelector("#pause")
const retomar = document.querySelector("#resume")
const reset = document.querySelector("#reset")

let cronoInicial = {
    interval:'',
    minutes : 0,
    seconds : 0,
    milliseconds : 0,
    isPause: false

}

start.addEventListener('click', starTimer )
pause.addEventListener('click', pauseTimer)
retomar.addEventListener('click', continueTimer)
reset.addEventListener('click', resetTimer)


function starTimer(){
    cronoInicial.interval =  setInterval(()=> {contagemRegressiva()}, 10)

    toggleButton()

    

}


function contagemRegressiva(){
    if(!cronoInicial.isPause){
        cronoInicial.milliseconds +=10

        if(cronoInicial.milliseconds ===1000){
            cronoInicial.seconds++
            cronoInicial.milliseconds = 0
        }
        if(cronoInicial.seconds === 60){
            cronoInicial.minutes++
            cronoInicial.seconds= 0
        }

    }
    minutesEl.textContent = String(cronoInicial.minutes).padStart(2, "0")
    segundsEl.textContent = String(cronoInicial.seconds).padStart(2, "0")
    milisegundosEl.textContent = cronoInicial.milliseconds

    

}


function toggleButton(){
    start.style.display = "none";
    pause.style.display = "block";
}
    
function pauseTimer(){
    cronoInicial.isPause = true
    pause.style.display ="none"
    resume.style.display = "block"

}

function continueTimer(){
    cronoInicial.isPause = false
    pause.style.display = "block"
    resume.style.display = "none"

}

function resetTimer(){
    clearInterval(cronoInicial.interval)
    cronoInicial.minutes = 0
    cronoInicial.seconds = 0
    cronoInicial.milliseconds = 0

    minutesEl.textContent = "00"
    segundsEl.textContent = "00"
    milisegundosEl.textContent = "000"
    




    start.style.display = "block"
    pause.style.display ="none"
    retomar.style.display = "none"
}
