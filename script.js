const images = ["images/knife.jpeg", "images/carta.png", "images/7.jpeg", "images/caveira.avif"];
const spinButton = document.getElementById("spin");
const slots = document.querySelectorAll(".slot");

let spinning = false;

function getRandomImage() {
    return images[Math.floor(Math.random() * images.length)];
}

function spin() {
    if (spinning) {
        return;
    }

    const targetImage = getRandomImage();

    spinning = true;
    spinButton.disabled = true;

    spinButton.innerHTML = 'Girando <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>';

    let spins = 0;
    const maxSpins = 3;
    const spinInterval = setInterval(() => {
        slots.forEach((slot, index) => {
            slot.innerHTML = `<img src="${getRandomImage()}" alt="Image" class="rounded d-flex">`;
        });

        spins++;

        if (spins >= maxSpins && slots[1].querySelector('img').getAttribute('src') === targetImage) {
            clearInterval(spinInterval);

            setTimeout(() => {
                spinning = false;
                spinButton.disabled = false;
                spinButton.innerHTML = 'Girar';
            }, 2000); 
        }
    }, 100);
}

spinButton.addEventListener("click", spin);
