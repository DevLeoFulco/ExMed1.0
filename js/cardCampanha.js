// script.js

function abrirModal(detalhes) {
    const modal = document.getElementById("myModal");
    const detalhesCampanha = document.getElementById("detalhes-campanha");
  
    detalhesCampanha.innerHTML = detalhes;
    modal.style.display = "block";
  }
  
  function fecharModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  
  // Fechar o modal se clicar fora do conteúdo
  window.onclick = function (event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
      fecharModal();
    }
  };

  