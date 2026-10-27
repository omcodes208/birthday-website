// 🎁 Open the birthday surprise
const surpriseBtn = document.getElementById("surpriseBtn");

surpriseBtn.addEventListener("click", function () {

    document.getElementById("messageSection").scrollIntoView({
        behavior: "smooth"
    });

    // Heart celebration
    for (let i = 0; i < 25; i++) {
        setTimeout(createHeart, i * 100);
    }

});


// 💗 Floating heart animation
function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    const heartSymbols = [
        "💗", "💕", "💖", "💝", "🩷", "✨"
    ];

    heart.textContent = heartSymbols[
        Math.floor(Math.random() * heartSymbols.length)
    ];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (16 + Math.random() * 20) + "px";

    const duration = 3 + Math.random() * 4;

    heart.style.animationDuration = duration + "s";

    document.getElementById("hearts-container").appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, duration * 1000);

}


// Floating hearts continue in the background
setInterval(createHeart, 800);


// 🎂 Blow out the birthday candles
const blowBtn = document.getElementById("blowBtn");

const wishMessage = document.getElementById("wishMessage");

let candlesBlown = false;

blowBtn.addEventListener("click", function () {

    const flames = document.querySelectorAll(".flame");

    if (!candlesBlown) {

        flames.forEach(function (flame) {
            flame.classList.add("off");
        });

        wishMessage.textContent =
            "🎉 May all your wishes come true! 💗✨";

        blowBtn.textContent = "Celebrate Again 🎉";

        candlesBlown = true;

        // Birthday celebration
        for (let i = 0; i < 35; i++) {
            setTimeout(createHeart, i * 80);
        }

    } else {

        flames.forEach(function (flame) {
            flame.classList.remove("off");
        });

        wishMessage.textContent =
            "Make another beautiful wish! 🩷";

        blowBtn.textContent = "Blow the Candles 🕯️";

        candlesBlown = false;

    }

});