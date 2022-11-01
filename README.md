# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

The Intro section with dropdown navigation challenge from Front End Mentor.

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](https://imgur.com/gm0Okt8)

### Links

- Solution URL: [GitHub](https://github.com/thejackshelton/thejackshelton-Intro_section_with_dropdown_navigation)
- Live Site URL: [Live Site](https://project-lemon-one.vercel.app/)

## My process

I started mobile first, and used one breakpoint for desktop at 1440px.

I then used transition-x-full and a div to create my mobile menu.

After creating the menu, I added some toggles with dropdown divs using JS, and Grace from FEM had the idea to rotate the arrow icon instead of using both. I used a transition to animate the icon.

I wanted to spice things up where I could, so I added a quick hover animation over the logos. Instead of using flex, I chose to use grid on the logos so that they maintained the proper AR and fitted nicely on both mobile and desktop.

On desktop, I gave both nav dropdown divs a position of absolute, and I implemented JS logic that toggles aria-expanded on open. If another nav is clicked then the open one will close and aria-expanded will be set to false.

I also set the parent div to display: block, in order to nest down and add flex in order to recreate the nav design for desktop. I also used justify-between in order to have login & register on the right side.

I tried implementing an animation on the dropdown divs, and I reached out for help in the Tailwind Discord. After receiving help from a user named Wongjn (props to you), I realized that my toggle with tailwind's hidden class prevented me from using any sort of transition.

Instead, I used tailwind's invisible class, but it ended up affecting the mobile menu design in a way that wasn't practical to work around, so I ended up reverting it. It was probably a better decision, since I'd assume tailwind's invisible class likely affects accessibility, as it's not actually hidden.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Tailwind](https://tailwindcss.com/) - CSS Framework

### What I learned

I learned a ton of new tailwind classes that I hadn't used before. My menu div being an example of using translate-x along with transform transitions.

```html
<div
  class="z-20 absolute bg-almostWhite p-4 h-full bottom-0 w-[250px] transition-transform duration-300 right-0 translate-x-full flex flex-col desktop:translate-x-0 desktop:bg-transparent desktop:w-full desktop:z-0"
  id="open-menu"
></div>
```

Here's the logic for my navigation!

```js
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

      if (!featuresDiv.classList.contains("hidden")) {
        featuresDiv.classList.toggle("hidden");
        featuresDownArrow.classList.toggle("rotate-180");
        featuresButton.setAttribute("aria-expanded", "false");
      }
    }

    if (navButtons[i] === featuresButton) {
      featuresDiv.classList.toggle("hidden");
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
```

### Continued development

With future projects, I want to continue using accesibility best practices, but I also want things to look smooth and professional as well!

I was a bit bummed out when I couldn't add a dropdown transition real easily unless it messed with the mobile version of the design, as well as the possibility of screen readers reading out my div when it's not visible by using the visibility: hidden; css property.

### Useful resources

- [Wind UI (Tailwind Component Library)](https://discord.gg/86tbnSWJ8e) - The team over at Wind-UI have done an amazing job at explaining how to use certain tailwind classes to me.
- [W3 Schools](https://www.w3schools.com/) - I find that MDN tends to use complex vocabulary instead of just simply stating what something does. W3 Schools is a good resource and I like their examples and documentation.

## Author

- Website - [Jack Shelton](https://jackshelton.com)
- Frontend Mentor - [@thejackshelton](https://www.frontendmentor.io/profile/thejackshelton)
- Twitter - [@thejackshelton](https://www.twitter.com/thejackshelton)

## Acknowledgments

Huge special thanks to Grace & Alex from FEM for getting me on track with this challenge. Nav Bars of any kind using tailwind now seem so much more simple than before going into this challenge.

Also a big thanks to Wongjn from Tailwind Labs, Christos, and Bot Fro from Wind UI for helping me out!
