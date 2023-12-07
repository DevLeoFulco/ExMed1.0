document.addEventListener("DOMContentLoaded", function () {
    const linkRegistro = document.getElementById("linkRegistro");
    const formCadastro = document.getElementById("formCadastro");
    const btnCancel = document.getElementById("btnCancel");
    const btnEnviar = document.getElementById("btnEnviar");
  
    linkRegistro.addEventListener("click", function () {
      exibirFormularioCadastro();
    });
  
    btnCancel.addEventListener("click", function () {
      window.location.href = "pagina-de-login.html"; // Redireciona para a página de login
    });
  
    formCadastro.addEventListener("submit", async function (event) {
      event.preventDefault();
      await validarCadastro();
    });
  
    async function validarCadastro() {
      const codigoCliente = document.getElementById("codigoCliente").value;
  
      // Simulando uma chamada assíncrona ao backend
      try {
        const response = await fetch(`/backend/verificarCodigoCliente?codigo=${codigoCliente}`);
        const data = await response.json();
  
        if (data.clienteExistente && !data.clienteCadastrado) {
          // Cliente existe, mas ainda não está cadastrado
          // Você pode prosseguir com o cadastro
          exibirPopup("Cadastro realizado com sucesso!");
        } else if (data.clienteExistente && data.clienteCadastrado) {
          // Cliente já cadastrado
          exibirPopup("Cliente já cadastrado.");
        } else {
          // Código do cliente inválido
          exibirPopup("Código do cliente inválido.");
        }
      } catch (error) {
        console.error("Erro ao verificar código do cliente:", error);
        exibirPopup("Erro ao verificar código do cliente.");
      }
    }
  
    function exibirFormularioCadastro() {
      // Lógica para exibir o formulário de cadastro
      // Você pode, por exemplo, modificar estilos para torná-lo visível
    }
  
    function exibirPopup(mensagem) {
      // Implemente uma lógica adequada para exibir um popup na interface
      alert(mensagem);
    }
  });
  