const images = ["images/knife.jpeg", "images/carta.png", "images/7.jpeg","images/caveira.avif"];
const spinButton = document.getElementById("spin");
const slots = document.querySelectorAll(".slot");

function getRandomImage() {
    return images[Math.floor(Math.random() * images.length)];
}

function spin() {
    slots.forEach((slot) => {
        slot.innerHTML = `<img src="${getRandomImage()}" alt="Image" class="rounded d-flex">`;
    });
}

spinButton.addEventListener("click", spin);
