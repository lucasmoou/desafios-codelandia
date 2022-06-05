const anima = document.querySelectorAll(".js-scroll");
const windowMetade = window.innerHeight * 0.6;

function initAnima() {
  if (anima.length) {
    function initScroll() {
      anima.forEach((event) => {
        const tamanho = event.getBoundingClientRect().top;
        const visible = tamanho - windowMetade < 0;

        if (visible) {
          event.classList.add("ativo");
        }
      });
    }
    initScroll();
    window.addEventListener("scroll", initScroll);
  }
}
initAnima();
