const mobileMenu = document.querySelector(".mobile-menu");
const buttons = document.querySelector(".b-nav");

mobileMenu.addEventListener("click", () => {
  buttons.classList.toggle("active");
});
