function criarPerfil() {
    let nome = document.getElementById("nome").value;
    let localizacao = document.getElementById("localizacao").value;
    let github = document.getElementById("github").value;
    let linkedin = document.getElementById("linkedin").value;
    let instagram = document.getElementById("instagram").value;
  
    if (!nome) {
      alert("Por favor, insira seu nome.");
      return;
    }
  
    let idUsuario = nome.toLowerCase().replace(/\s+/g, "-"); // Exemplo: "Daniel Santos" -> "daniel-santos"
  
    let dadosUsuario = {
      nome: nome,
      localizacao: localizacao,
      github: github,
      linkedin: linkedin,
      instagram: instagram
    };
  
    localStorage.setItem(idUsuario, JSON.stringify(dadosUsuario));
  
    let linkGerado = `${window.location.origin}/perfil.html?id=${idUsuario}`;
    document.getElementById("linkGerado").innerHTML = `<a href="${linkGerado}" target="_blank">${linkGerado}</a>`;
  }
  
  function carregarPerfil() {
    let urlParams = new URLSearchParams(window.location.search);
    let idUsuario = urlParams.get("id");
  
    if (!idUsuario) {
      alert("Usuário não encontrado!");
      return;
    }
  
    let dadosUsuario = localStorage.getItem(idUsuario);
  
    if (!dadosUsuario) {
      alert("Perfil não encontrado!");
      return;
    }
  
    dadosUsuario = JSON.parse(dadosUsuario);
  
    document.getElementById("nome").textContent = dadosUsuario.nome;
    document.getElementById("localizacao").textContent = dadosUsuario.localizacao;
    document.getElementById("github").href = dadosUsuario.github;
    document.getElementById("linkedin").href = dadosUsuario.linkedin;
    document.getElementById("instagram").href = dadosUsuario.instagram;
  }
  