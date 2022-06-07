const section = document.querySelector(".js-scroll");

const metade = window.innerHeight * 0.5;

function animeScroll() {
  const altura = section.getBoundingClientRect().top;
  const visible = altura - metade < 0;
  if (visible) {
    section.classList.add("ativo");
  }
}
animeScroll();
window.addEventListener("scroll", animeScroll);
