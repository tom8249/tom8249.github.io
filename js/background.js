const images = [
    "1.GIF",
    "2.GIF",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg"
];


const bgImage = document.createElement("img");

function randomImg() {
    const chosenImage = images[Math.floor(Math.random()*images.length)];
    document.body.style.backgroundImage=`url(img/${chosenImage})`;
}

randomImg();

setInterval(randomImg,5000);