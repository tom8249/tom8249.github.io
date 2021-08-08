const API_KEY = "309adc13ca0eb3436042b32fca4a7acf"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        console.log(data.name,data.weather[0].main);
    });
}

function onGeoError() {
    alert("Can't find you. No weather fot you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);