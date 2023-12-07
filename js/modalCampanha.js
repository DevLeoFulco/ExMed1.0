function abrirDetalhesModal(imagem, titulo, descricao) {
    const modal = document.getElementById("myModal");
    const imgElement = document.getElementById("campanha-imagem");
    const tituloElement = document.getElementById("campanha-titulo");
    const descricaoElement = document.getElementById("campanha-descricao");
  
    imgElement.src = imagem;
    tituloElement.textContent = titulo;
    descricaoElement.textContent = descricao;
  
    modal.style.display = "block";
  }
  
  function fecharModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  