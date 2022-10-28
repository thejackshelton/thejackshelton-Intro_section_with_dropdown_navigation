// Menu
const openButton = document.querySelector("#open-button");
const closeButton = document.querySelector("#close-button");
const openMenu = document.querySelector("#open-menu");
const body = document.querySelector("body");

//Menu Items
const companyDiv = document.querySelector("#company-div");
const companyLI = document.querySelector("#company-li");
const featuresDiv = document.querySelector("#features-div");
const featuresLI = document.querySelector("#features-li");
const companyDownArrow = document.querySelector("#company-down-arrow");
const featuresDownArrow = document.querySelector("#features-down-arrow");

openButton.addEventListener("click", () => {
  openMenu.classList.toggle("translate-x-full");
  openButton.classList.toggle("hidden");
  closeButton.classList.toggle("hidden");
  body.style.background = "rgba(0, 0, 0, 0.6)";
  body.style.transition = "all .5s";

  // Setting aria-expanded for accessibility
  openButton.setAttribute(
    "aria-expanded",
    openButton.getAttribute("aria-expanded") === "true" ? "false" : "true"
  );
});

closeButton.addEventListener("click", () => {
  openMenu.classList.toggle("translate-x-full");
  openButton.classList.toggle("hidden");
  closeButton.classList.toggle("hidden");
  body.style.background = "none";
});

companyLI.addEventListener("click", () => {
  companyDiv.classList.toggle("hidden");
  companyDownArrow.classList.toggle("rotate-180");

  // Setting aria-expanded for accessibility
  companyLI.setAttribute(
    "aria-expanded",
    companyLI.getAttribute("aria-expanded") === "true" ? "false" : "true"
  );
});

featuresLI.addEventListener("click", () => {
  featuresDiv.classList.toggle("hidden");
  featuresDownArrow.classList.toggle("rotate-180");

  // Setting aria-expanded for accessibility
  featuresLI.setAttribute(
    "aria-expanded",
    featuresLI.getAttribute("aria-expanded") === "true" ? "false" : "true"
  );
});
