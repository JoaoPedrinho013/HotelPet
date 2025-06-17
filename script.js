const btnTopo = document.getElementById("btnTopo");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      btnTopo.style.display = "block";
    } else {
      btnTopo.style.display = "none";
    }
  });

  btnTopo.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

window.addEventListener('DOMContentLoaded', () => {
        const usuario = localStorage.getItem('usuarioLogado');
        if (usuario) {
            const barra_navegacao_caixa2 = document.querySelector('.barra_navegacao_caixa2');
            barra_navegacao_caixa2.innerHTML = ``;
           
        }
    });
window.addEventListener('DOMContentLoaded', () => {
    localStorage.clear();
});

const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("menuMobile");

toggle.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});
