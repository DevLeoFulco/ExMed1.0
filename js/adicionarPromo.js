document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btnConcluir").addEventListener("click", function () {
    // Obter os dados do formulário aqui
    var formData = new FormData(document.getElementById("formadicao"));

    // Enviar os dados para o backend usando fetch
    fetch("nossa_url_backend", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // o que podemos fazer com o retorno do back pode ficar aqui 
        console.log(data);
        
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  });

  document.getElementById("btnVoltar").addEventListener("click", function () {
    // Lógica para voltar à página anterior que sera telaadm.html
    window.history.back();
  });
});
