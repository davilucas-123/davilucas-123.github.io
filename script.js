// Rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const alvo = document.querySelector(link.getAttribute("href"));
    if (alvo) alvo.scrollIntoView({ behavior: "smooth" });
  });
});

// Botão voltar ao topo
const btnTopo = document.getElementById("btn-topo");

window.addEventListener("scroll", () => {
  btnTopo.style.display = window.scrollY > 300 ? "block" : "none";
});

btnTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Tema claro/escuro (sem salvar)
const body = document.body;
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  const isLight = body.classList.toggle("light");
  themeToggle.textContent = isLight ? "🌙" : "☀️";
});

console.log("Portfólio do Davi com tema claro/escuro simples!");
