// Navbar variables
const navToggler = document.querySelector(".nav-toggler");
const navMenu = document.querySelector(".site-navbar ul");
const navLinks = document.querySelectorAll(".site-navbar a");
const navBar = document.querySelector(".navbar-area");
// Scroll to Up
const scrollToUpButton = document.querySelector(".scroll-to-up");
// Accordion Variables
const accHeading = document.querySelectorAll(".accordion");
const accPanel = document.querySelectorAll(".panel");

// Navbar Set-up
// Change navbar color when scrolled
const changeBackground = () => {
  if (window.scrollY > 100) {
    navBar.classList.add("navbar-scroll");
  } else {
    navBar.classList.remove("navbar-scroll");
  }
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

// Scroll to Top
const buttonVisibility = () => {
  if (window.scrollY > 100) {
    scrollToUpButton.classList.add("scroll-active");
  } else {
    scrollToUpButton.classList.remove("scroll-active");
  }
};

const scrollToUp = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// functions of all event listners
const allEventListners = () => {
  // toggler icon click event
  navToggler.addEventListener("click", togglerClick);
  // nav links click event
  navLinks.forEach((elem) => elem.addEventListener("click", navLinkClick));

  // Change Background on Scroll
  window.addEventListener("scroll", changeBackground);
  window.addEventListener("load", changeBackground);

  // Change Button Visibility on Scroll
  window.addEventListener("scroll", buttonVisibility);
};

// load all event listners
allEventListners();

// Accordion Set-up
// Function that shows a Panel
const showPanel = (elem) => {
  hidePanels();
  elem.classList.add("active");
  elem.nextElementSibling.style.maxHeight = `${elem.nextElementSibling.scrollHeight}px`;
};

// Function that hides all shown Panels
const hidePanels = () => {
  for (let i = 0; i < accPanel.length; i++) {
    accPanel[i].style.maxHeight = null;
    accHeading[i].classList.remove("active");
  }
};

for (let i = 0; i < accHeading.length; i++) {
  accHeading[i].onclick = () => {
    if (accHeading[i].nextElementSibling.style.maxHeight) {
      hidePanels();
    } else {
      showPanel(accHeading[i]);
    }
  };
}

// Show Subscribed Alert
const showSubscribedAlert = () => {
  alert(
    "Thank you for subscribing to our Newsletter! Updates will be sent to your Email Account."
  );
};

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

// AOS Config
AOS.init({
  once: true,
  duration: 2000,
  delay: 200,
});
