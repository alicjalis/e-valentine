const gif = document.getElementById("gif");
const noButton = document.getElementById("nobutton")
const firstGifDuration = 5500;

// Preload drugiego GIF-a
const secondGif = new Image();
secondGif.src = "images/lisek_second.gif";

const angryGif= new Image();
angryGif.src = "images/lisek_angry.gif";

// Po 5,5 sekundy zmieniamy GIF
setTimeout(() => {
    gif.src = secondGif.src; // Podmieniamy na już wczytany GIF
}, firstGifDuration);


noButton.addEventListener("mouseenter", () => {
    gif.src = angryGif.src;
})

noButton.addEventListener("mouseleave", () => {
    gif.src = secondGif.src;
})