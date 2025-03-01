function linkWorldClock() {
  window.open("https://lovely-malabi-ad6eae.netlify.app/", "_blank");
}

function linkWeatherApp() {
  window.open("https://famous-moxie-cc2d96.netlify.app/", "_blank");
}

let wcButton = document.querySelector("#buttonWC");
wcButton.addEventListener("click", linkWorldClock);

let waButton = document.querySelector("#buttonWA");
waButton.addEventListener("click", linkWeatherApp);
