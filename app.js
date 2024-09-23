const btnToggle = document.querySelector(".btn-toggle");
const navLinksMobile = document.querySelector(".nav-links-mobile");
const overlay = document.querySelector(".overlay");

const mobileMenuAccessible = () => {
  overlay.classList.toggle("show-overlay");
  navLinksMobile.classList.toggle("show-nav");
  document.body.classList.toggle("fixed-position");
};

btnToggle.addEventListener("click", () => {
  mobileMenuAccessible();
});

const closeBtn = document.querySelector(".btn-close");

closeBtn.addEventListener("click", () => {
  mobileMenuAccessible();
});
