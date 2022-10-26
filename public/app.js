// Menu
const openIcon = document.querySelector("#open-icon");
const closeIcon = document.querySelector("#close-icon");
const openMenu = document.querySelector("#open-menu");
const body = document.querySelector("body");

//Menu Items
const companyDiv = document.querySelector("#company-div");
const companyButton = document.querySelector("#company-button");
const featuresDiv = document.querySelector("#features-div");
const featuresButton = document.querySelector("#features-button");
const companyUpArrow = document.querySelector("#company-up-arrow");
const companyDownArrow = document.querySelector("#company-down-arrow");
const featuresUpArrow = document.querySelector("#features-up-arrow");
const featuresDownArrow = document.querySelector("#features-down-arrow");

openIcon.addEventListener("click", () => {
  openMenu.classList.toggle("translate-x-full");
  openIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
  body.style.background = "rgba(0, 0, 0, 0.6)";
  body.style.transition = "all .5s";
});

closeIcon.addEventListener("click", () => {
  openMenu.classList.toggle("translate-x-full");
  openIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
  body.style.background = "none";
});

companyButton.addEventListener("click", () => {
  companyDiv.classList.toggle("hidden");
  companyUpArrow.classList.toggle("hidden");
  companyDownArrow.classList.toggle("hidden");
});

featuresButton.addEventListener("click", () => {
  featuresDiv.classList.toggle("hidden");
  featuresUpArrow.classList.toggle("hidden");
  featuresDownArrow.classList.toggle("hidden");
});
