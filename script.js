const btnSaibaMais = document.getElementById("btnSaibaMais");
if (btnSaibaMais) {
  btnSaibaMais.addEventListener("click", () => {
    alert("Acompanhe as últimas novidades sobre o mundo dos carros!");
  });
}

const btnTema = document.getElementById("btnTema");
if (btnTema) {
  btnTema.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btnTema.textContent = document.body.classList.contains("dark")
      ? "Tema Claro"
      : "Tema Escuro";
  });
}

const form = document.getElementById("formContato");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const feedback = document.getElementById("feedback");
    feedback.textContent = `Obrigado pelo contato, ${nome}! 🚗`;
    feedback.style.color = "green";
    form.reset();
  });
}
