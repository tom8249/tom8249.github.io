const clock = document.querySelector("h2#clock");

function KoreaTime() {
    const date = new Date();
    clock.innerText = String(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`).padStart(2,"0");
}

KoreaTime();
setInterval(KoreaTime,1000);