function linkWorldClock() {
  window.location.href = "https://lovely-malabi-ad6eae.netlify.app/";
}

function linkWeatherApp() {
  window.location.href = "https://famous-moxie-cc2d96.netlify.app/";
}

let wcButton = document.querySelector("#buttonWC");
wcButton.addEventListener("click", linkWorldClock);

let waButton = document.querySelector("#buttonWA");
waButton.addEventListener("click", linkWeatherApp);
