
const time = document.getElementById(`container`);
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;


function start(){

    if(!isRunning){
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
    
    }
}

function stop(){

}

function reset(){

}


function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60)).toString().padStart(2, "0");
    let minutes = Math.floor((elapsedTime / (1000 * 60) % 60)).toString().padStart(2, "0");
    let seconds = Math.floor(elapsedTime / 1000 % 60).toString().padStart(2, "0");
    let mseconds = Math.floor(elapsedTime % 1000 / 10).toString().padStart(2, "0");

    time.textContent = `${hours}:${minutes}:${seconds}:${mseconds}`
}