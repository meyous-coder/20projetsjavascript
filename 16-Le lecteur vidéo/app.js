const video = document.querySelector("video");
const btnPlayPause = document.getElementById("play-pause");
const img = document.querySelector("#play-pause img");
const barreOrange = document.querySelector(".barre-orange");
const progression = document.querySelector(".juice");
const btnMute = document.getElementById("mute");
const imgMute = document.querySelector("#mute img");
const btnPleinEcran = document.getElementById("fullscreen");
const curseurVol = document.getElementById("volume-slider");

btnPlayPause.addEventListener("click", togglePlayPause);
video.addEventListener("click", togglePlayPause);

function togglePlayPause() {
  if (video.paused) {
    img.src = "ressources/pause.svg";
    img.setAttribute("alt", "Icône de pause");
    video.play();
  } else {
    img.src = "ressources/play.svg";
    img.setAttribute("alt", "Icône de lecture");
    video.pause();
  }
}

// la barre orange

video.addEventListener("timeupdate", () => {
  let juicePos = video.currentTime / video.duration;
  progression.style.width = juicePos * 100 + "%";

  if (video.ended) {
    img.src = "ressources/play.svg";
  }
});

// Volume

curseurVol.addEventListener("change", () => {
  video.volume = curseurVol.value / 100;
});

// Mute

btnMute.addEventListener("click", () => {
  if (video.muted) {
    video.muted = false;
    btnMute.innerText = "Mute";
  } else {
    video.muted = true;
    btnMute.innerText = "Unmute";
  }
});

// Clic sur la barre

let rect = barreOrange.getBoundingClientRect();
let largeur = rect.width;

barreOrange.addEventListener("click", (e) => {
  let x = e.clientX - rect.left;
  let widthPercent = (x * 100) / largeur;

  let durationVideo = video.duration;

  // Position en seconde par rapport au pourcentage
  video.currentTime = durationVideo * (widthPercent / 100);
});

window.addEventListener("resize", () => {
  let rect = barreOrange.getBoundingClientRect();
  let largeur = rect.width;
});


// Plein écran 

video.addEventListener('dblclick',()=>{
    video.requestFullscreen();
});

btnPleinEcran.addEventListener('click',()=>{
    video.requestFullscreen();
}); 