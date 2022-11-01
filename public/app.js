// Menu
const navButtons = document.querySelectorAll(
  "#company-button, #features-button"
);

const openButton = document.querySelector("#open-button");
const closeMenuIcon = document.querySelector("#close-menu-icon");
const openMenuIcon = document.querySelector("#open-menu-icon");
const openMenu = document.querySelector("#open-menu");
const body = document.querySelector("body");

//  Menu Items
const companyDiv = document.querySelector("#company-div");
const companyButton = document.querySelector("#company-button");
const featuresLI = document.querySelector("#features-li");
const featuresButton = document.querySelector("#features-button");
const companyDownArrow = document.querySelector("#company-down-arrow");
const featuresDownArrow = document.querySelector("#features-down-arrow");

for (let i = 0; i < navButtons.length; i++) {
  navButtons[i].addEventListener("click", (e) => {
    if (navButtons[i] === companyButton) {
      companyDiv.classList.toggle("hidden");
      companyDownArrow.classList.toggle("rotate-180");

      companyButton.setAttribute(
        "aria-expanded",
        companyButton.getAttribute("aria-expanded") === "true"
          ? "false"
          : "true"
      );

      if (!featuresLI.classList.contains("hidden")) {
        featuresLI.classList.toggle("hidden");
        featuresDownArrow.classList.toggle("rotate-180");
        featuresButton.setAttribute("aria-expanded", "false");
      }
    }

    if (navButtons[i] === featuresButton) {
      featuresLI.classList.toggle("hidden");
      featuresDownArrow.classList.toggle("rotate-180");

      featuresButton.setAttribute(
        "aria-expanded",
        featuresButton.getAttribute("aria-expanded") === "true"
          ? "false"
          : "true"
      );

      if (!companyDiv.classList.contains("hidden")) {
        companyDiv.classList.toggle("hidden");
        companyDownArrow.classList.toggle("rotate-180");
        companyButton.setAttribute("aria-expanded", "false");
      }
    }
  });
}

openButton.addEventListener("click", () => {
  openMenu.classList.toggle("translate-x-full");
  closeMenuIcon.classList.toggle("hidden");
  openMenuIcon.classList.toggle("hidden");

  // Setting aria-expanded for accessibility
  openButton.setAttribute(
    "aria-expanded",
    openButton.getAttribute("aria-expanded") === "true" ? "false" : "true"
  );

  if (openButton.ariaExpanded) {
    body.style.background = "rgba(0, 0, 0, 0.6)";
    body.style.transition = "all .5s";
  } else {
    body.style.background = "none";
  }
});

// closeMenuIcon.addEventListener("click", () => {
//   openMenu.classList.toggle("translate-x-full");
//   openButton.classList.toggle("hidden");
//   closeMenuIcon.classList.toggle("hidden");
//   body.style.background = "none";
// });
