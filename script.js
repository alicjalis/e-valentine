const gif = document.getElementById("gif");
const noButton = document.getElementById("nobutton")
const yesButton = document.getElementById("yesbutton")
const firstGifDuration = 5500;
const valentinesFirstGifDuration = 2000;
const backgroundContainer = document.querySelector('.background-container');
const smallImageSrc = "images/dwukropek_trzy.png";
const dearMimi = document.getElementById("top-left-image")

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
bigAngryImage.style.top = "30%";
bigAngryImage.style.left = "50%";
bigAngryImage.style.transform = "translate(-50%, -50%)";  // Wyśrodkowanie
bigAngryImage.style.width = "200vw";
bigAngryImage.style.height = "auto";
bigAngryImage.style.zIndex = "9999";  // Na samej górze
bigAngryImage.style.display = "none";  // Domyślnie ukryty
document.body.appendChild(bigAngryImage);

const beatlesSecondGif = new Image();
beatlesSecondGif.src = "images/lisek_beatles_second.gif";

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
    dearMimi.style.display = 'none';

    const helpButton = document.createElement("button");
    helpButton.innerText = "Help";
    helpButton.classList.add("help-button");
    buttonsContainer.appendChild(helpButton);
    
   
    helpButton.style.position = "fixed";
    helpButton.style.top = "20px";
    helpButton.style.left = "20px";
    helpButton.style.zIndex = "1000"; 


    setTimeout(() => {
        gif.src = valentinesSecondGif.src;
        newImage.style.display = "block";
        setInterval(addRandomImage, 200);

    }, valentinesFirstGifDuration)

    helpButton.addEventListener("click", () => {

        const audio = new Audio("sounds/help.mp3");
        audio.loop = true;  // Powtarzanie w kółko
        audio.volume = 0.5;  
        audio.play();  
        
        document.body.innerHTML = ''; // Czyści cały ekran

        
        const container = document.createElement("div");
        container.style.position = "absolute";
        container.style.top = "50%";
        container.style.left = "50%";
        container.style.transform = "translate(-50%, -50%)";
        container.style.textAlign = "center";

        
        const helpImage = document.createElement("img");
        helpImage.src = "images/help!.png";
        helpImage.style.width = "300px";  // Dostosuj rozmiar

        
        const lisek = document.createElement("img");
        lisek.src = "images/lisek_beatles_first.gif";
        lisek.style.width = "300px";  // Dostosuj rozmiar
        lisek.style.display = "block";
        lisek.style.marginTop = "20px";  // Odstęp od napisu

        container.appendChild(helpImage);
        container.appendChild(lisek);
        document.body.appendChild(container);

        setTimeout(() => {
            lisek.src = beatlesSecondGif.src;
        }, 2000);
    });
});

noButton.addEventListener("click", () => {
    bigAngryImage.style.display = "block";
    setTimeout(() => {
        bigAngryImage.style.display = "none";
    }, 2000)
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