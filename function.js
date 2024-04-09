let diplay = document.getElementById("diplay")
let timer = null
let starttime = 0
let elapsedtime = 0
let isrunning = false;



function start() {
    if (!isrunning) {
        starttime = Date.now() - elapsedtime;
        timer = setInterval(Update, 10)
        isrunning = true
    }
}
function stop() {
    if (isrunning) {
        clearTimeout(timer)
        elapsedtime = Date.now - starttime;
        isrunning = false
    }
}
function reset() {
    clearTimeout(timer)
    starttime = 0
     elapsedtime = 0
     isrunning = false;
     diplay.innerHTML = "00:00:00:00"
}
function Update() {
    let cuurentime = Date.now();
    elapsedtime = cuurentime - starttime;
    let hours = Math.floor(elapsedtime / (1000 * 60 * 60));
    let mintue = Math.floor(elapsedtime / (1000 * 60) % 60);
    let second = Math.floor(elapsedtime / 1000 % 60);
    let miisecond = Math.floor(elapsedtime % 1000 / 10);

    hours = String(hours).padStart(2, "0")
    mintue = String(mintue).padStart(2, "0")
    second = String(second).padStart(2, "0")
    miisecond = String(miisecond).padStart(2, "0")
    diplay.innerHTML = `${hours}:${mintue}:${second}:${miisecond}`


}