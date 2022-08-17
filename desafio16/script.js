const mobile = document.querySelector(".mobile-menu");

function toggleMenu() {
const nav = document.querySelector(".nav");
  nav.classList.toggle('ativo')
}

mobile.addEventListener('click', toggleMenu)
