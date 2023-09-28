let usuario, senha, tipoUsu, escolha, escolhaArea;

usuario = document.querySelector("#usuario");
senha = document.querySelector("#senha");
tipo = document.querySelector("#tipo");
escolha = document.querySelectorAll('input[name="area"]:checked');

function autenticar() {
  user = usuario.value;
  pass = senha.value;

  if(user === "" && pass === ""){
    console.log("inserir valor nos campos");
    limparCampos();
  }else{
    if (user === "senac" && pass === "senac") {
        console.log("autenticado...");
      } else {
        console.log("não autenticado...");
        limparCampos();
      }
      selecionaTipo();
      escolhaAreaNome();
  }  
}

function limparCampos() {
  usuario.value = "";
  senha.value = "";
  usuario.focus();
}

function selecionaTipo() {
  tipoUsu = tipo.value;

  switch (tipoUsu) {
    case "adm":
      console.log("Administrador");
      break;
    case "aln":
      console.log("Aluno");
      break;
    case "pro":
      console.log("Professor");
      break;
    case "default":
      console.log("Usuário não definido!!!");
      break;
  }
}

function escolhaTipo() {
  tipoUsu = tipo.value;

  switch (tipoUsu) {
    case "adm":
      console.log("Administrador");
      break;
    case "aln":
      console.log("Aluno");
      break;
    case "pro":
      console.log("Professor");
      break;
    case "default":
      console.log("Usuário não definido!!!");
      break;
  }
}
function escolhaAreaNome() {
  let values = [];
  escolha.foreach(
    (checkbox)=>{
        values.push(checkbox.value);
    });
    console.log(values);

}
