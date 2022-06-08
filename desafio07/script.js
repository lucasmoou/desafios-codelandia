const card = document.querySelectorAll(".js-scroll");

function animaScroll() {
  card.forEach((e)=>{
   e.classList.add('ativo')
  })
}
animaScroll()

window.addEventListener("load", animaScroll);
