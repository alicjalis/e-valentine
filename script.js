const gif = document.getElementById("gif");
const noButton = document.getElementById("nobutton")
const yesButton = document.getElementById("yesbutton")
const firstGifDuration = 5500;
const valentinesFirstGifDuration = 2000;
const backgroundContainer = document.querySelector('.background-container');
const smallImageSrc = "images/dwukropek_trzy.png";

// Preload drugiego GIF-a
const secondGif = new Image();
secondGif.src = "images/lisek_second.gif";

const angryGif = new Image();
angryGif.src = "images/lisek_angry.gif";

const valentinesFirstGif = new Image();
valentinesFirstGif.src = "images/lisek_valentines_first.gif";

const valentinesSecondGif = new Image();
valentinesSecondGif.src = "images/lisek_valentines_second.gif";

const newImage = document.createElement("img");
newImage.src = "images/yay.png";
newImage.style.display = "none";
newImage.classList.add("centered-image")

const buttonsContainer = document.querySelector(".buttons");
buttonsContainer.appendChild(newImage);

const bigAngryImage = document.createElement("img");
bigAngryImage.src = "images/lisek_big_angry.png";
bigAngryImage.style.position = "fixed";  // Przykrywa cały ekran
bigAngryImage.style.top = "50%";
bigAngryImage.style.left = "50%";
bigAngryImage.style.transform = "translate(-50%, -50%)";  // Wyśrodkowanie
bigAngryImage.style.width = "200vw";
bigAngryImage.style.height = "auto";
bigAngryImage.style.zIndex = "9999";  // Na samej górze
bigAngryImage.style.display = "none";  // Domyślnie ukryty
document.body.appendChild(bigAngryImage);

yesButton.style.pointerEvents = "none";
noButton.style.pointerEvents = "none";

// Po 5,5 sekundy zmieniamy GIF
setTimeout(() => {
    gif.src = secondGif.src; // Podmieniamy na już wczytany GIF

    const valentinesText = document.querySelector('.valentine-text');
    const buttons = document.querySelector('.buttons');

    valentinesText.style.display = 'block';  // Ustawienie elementu na widoczny
    buttons.style.display = 'flex';  // Ustawienie elementu na widoczny
    setTimeout(() => {
        valentinesText.style.opacity = 1; // Stopniowe pojawienie się
        buttons.style.opacity = 1; // Stopniowe pojawienie się

        yesButton.style.pointerEvents = "auto";
        noButton.style.pointerEvents = "auto";
    }, 10);
}, firstGifDuration);

yesButton.addEventListener("click", () => {
    gif.src = valentinesFirstGif.src;
    noButton.style.display = 'none';  // Ukrywamy przycisk 'No'
    yesButton.style.pointerEvents = 'none';
    const valentinesText = document.querySelector('.valentine-text');
    valentinesText.style.display = 'none';  // Ukrywamy napis



    setTimeout(() => {
        gif.src = valentinesSecondGif.src;
        newImage.style.display = "block";
        setInterval(addRandomImage, 300);

    }, valentinesFirstGifDuration)
});

noButton.addEventListener("click", () => {
    bigAngryImage.style.display = "block";
    setTimeout(() => {
        bigAngryImage.style.display = "none";
    }, 3000)
})

noButton.addEventListener("mouseenter", () => {
    gif.src = angryGif.src;
})

noButton.addEventListener("mouseleave", () => {
    gif.src = secondGif.src;
})

function addRandomImage() {
    const img = document.createElement("img");
    img.src = smallImageSrc;

    // Ustawienie losowej pozycji w obrębie całego ekranu
    img.style.left = `${Math.random() * 100}vw`;
    img.style.top = `${Math.random() * 100}vh`;

    backgroundContainer.appendChild(img);
}