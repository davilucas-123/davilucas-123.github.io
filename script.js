// Rolagem suave ao clicar no menu
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const alvo = document.querySelector(link.getAttribute("href"));
    if (alvo) {
      alvo.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Botão voltar ao topo
const btnTopo = document.getElementById("btn-topo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
});

btnTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

console.log("Portfólio do Davi carregado com interações!");
