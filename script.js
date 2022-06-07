const navToggler = document.querySelector(".nav-toggler");
const navMenu = document.querySelector(".site-navbar ul");
const navLinks = document.querySelectorAll(".site-navbar a");

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

// load all event listners
allEventListners();
