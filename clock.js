const clock = document.querySelector("h2#clock");

function KoreaTime() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

KoreaTime();
setInterval(KoreaTime,1000);