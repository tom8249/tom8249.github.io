const clock = document.querySelector("h2#clock");

function KoreaTime() {
    const date = new Date();
    const hours = String(date.getHours()).padEnd(2,"0");
    const minutes = String(date.getMinutes()).padEnd(2,"0");
    const seconds = String(date.getSeconds()).padEnd(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

KoreaTime();
setInterval(KoreaTime,1000);