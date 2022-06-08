const navToggler = document.querySelector(".nav-toggler");
const navMenu = document.querySelector(".site-navbar ul");
const navLinks = document.querySelectorAll(".site-navbar a");
const navBar = document.querySelector(".navbar-area");

// functions of all event listners
const allEventListners = () => {
  // toggler icon click event
  navToggler.addEventListener("click", togglerClick);
  // nav links click event
  navLinks.forEach((elem) => elem.addEventListener("click", navLinkClick));
};

// togglerClick function
const togglerClick = () => {
  navToggler.classList.toggle("toggler-open");
  navMenu.classList.toggle("open");
};

// navLinkClick function
const navLinkClick = () => {
  if (navMenu.classList.contains("open")) {
    navToggler.click();
  }
};

// Change navbar color when scrolled
window.onscroll = () => {
  "use strict";
  if (
    document.body.scrollTop >= 100 ||
    document.documentElement.scrollTop >= 100
  ) {
    navBar.classList.add("navbar-scroll");
  } else {
    navBar.classList.remove("navbar-scroll");
  }
};

// load all event listners
allEventListners();

// Swiper Config
const swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  loop: true,
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
