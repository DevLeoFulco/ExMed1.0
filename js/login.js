document.addEventListener("DOMContentLoaded", function () {
  const formLogin = document.getElementById("login_form");

  formLogin.addEventListener("submit", function (e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    const email = document.getElementById("email").value;

    // Condição para saber se será usuário ou adm
    if (email.includes("@adm.teste")) {
      window.location.href = "telaadm.html";
    } else {
      window.location.href = "usuario.html";
    }
  });
});
