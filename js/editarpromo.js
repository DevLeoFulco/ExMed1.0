document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btnVoltar").addEventListener("click", function () {
    
    console.log ("Clicou em VOLTAR!")
    window.location.href = "telaadm.html";
  });

  document.getElementById("btnProximo").addEventListener("click", function () {
    
    console.log("Clicou em PROXIMO !")
    // Obter os dados do formulário
    var formData = new FormData(document.getElementById("editPromoForm"));

    // Enviar os dados para o nosso backend usando fetch
    fetch("url_do_nosso_backend", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // podemos fazer algo com a resposta do Back End aqui
        console.log(data);
        
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  });
});
