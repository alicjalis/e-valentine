const gif = document.getElementById("gif");
const noButton = document.getElementById("nobutton")
const yesButton = document.getElementById("yesbutton")
const firstGifDuration = 5500;
const valentinesFirstGifDuration = 2000;

// Preload drugiego GIF-a
const secondGif = new Image();
secondGif.src = "images/lisek_second.gif";

const angryGif= new Image();
angryGif.src = "images/lisek_angry.gif";

const valentinesFirstGif = new Image();
valentinesFirstGif.src = "images/lisek_valentines_first.gif";

const valentinesSecondGif = new Image();
valentinesSecondGif.src = "images/lisek_valentines_second.gif";

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
    }, 10); 
}, firstGifDuration);

yesButton.addEventListener("click", () => {
    gif.src = valentinesFirstGif.src;
    noButton.style.display = 'none';  // Ukrywamy przycisk 'No'
    const valentinesText = document.querySelector('.valentine-text');
    valentinesText.style.display = 'none';  // Ukrywamy napis

    setTimeout(()=>{
        gif.src = valentinesSecondGif.src;

    }, valentinesFirstGifDuration)
});


noButton.addEventListener("mouseenter", () => {
    gif.src = angryGif.src;
})

noButton.addEventListener("mouseleave", () => {
    gif.src = secondGif.src;
})

