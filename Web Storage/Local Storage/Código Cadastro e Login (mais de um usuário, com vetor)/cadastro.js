// Armazena os valores dos inputs da tela de Cadastro
let nomeCadastro = document.getElementById("user")
let senhaCadastro = document.getElementById("pass")

// Armazena os valores dos inputs da tela de Login
let nomeLogin = document.getElementById("userLog")
let senhaLogin = document.getElementById("senhaLog")

//Armazena o nome de usurio digitado no input de exlusão
let nomeExcluir = document.getElementById("exluir")

// Cria vetores vazios para armazenamento temporário dos dados
let nomes = []
let senhas = []


function Cadastrar(){

    // Pega valores do LocalStorage (se tiver) e armazena
    nomes = JSON.parse(localStorage.getItem("cadastro_usuario"));
    senhas = JSON.parse(localStorage.getItem("cadastro_senha"));

  // Compara se o que veio do LocalStorage é vazio  
  if (nomes == null) {

    // Se estiver vazio, recria os vetores temporários
    nomes = []
    senhas = []

    // Adiciona os valores dos inputs no início dos vetores
    nomes.push(nomeCadastro.value)
    senhas.push(senhaCadastro.value)

    // Joga para o LocalStorage novamente
    localStorage.setItem("cadastro_usuario", JSON.stringify(nomes))
    localStorage.setItem("cadastro_senha", JSON.stringify(senhas))
  
  } else {

    // Se não estiver vazio
    // Apenas adiciona os valores dos inputs após os valores que já tem nos vetores
    nomes.push(nomeCadastro.value)
    senhas.push(senhaCadastro.value)

    // Joga para o LocalStorage novamente
    localStorage.setItem("cadastro_usuario", JSON.stringify(nomes))
    localStorage.setItem("cadastro_senha", JSON.stringify(senhas))

  }

    // Mostra mensagem cadastro efetuado e carrega a página de login
    alert("Seu cadastro foi efetuado com sucesso!");
    
    //Pula para a pagina de login
    window.location.href="login.html"

}

function Logar(){

    // Pega valores do LocalStorage (se tiver) e armazena
    nomes = JSON.parse(localStorage.getItem("cadastro_usuario"))
    senhas = JSON.parse(localStorage.getItem("cadastro_senha"))

    let logou = 0

    // Realiza um loop do tamanho dos vetores
    for(i=0; i < nomes.length; i++){

        // Se o nome e senha no input do login forem iguais ao nome e senha da vez no loop
        if(nomeLogin.value == nomes[i] && senhaLogin.value == senhas[i]){

          // Flag "logou" ativa	
	       logou = 1
	    	}
    }
   
     if (logou == 1){

          // Mostra mensagem de login efetuado
          alert("Login efetuado!")

          //Pula para a pagina principal
          window.location.href="principal.html"

     }else{

          // Senão, mostra mensagem de login falhou
          alert("Login falhou!")

     }   

}

function Listar (){

  // Pega valores do LocalStorage (se tiver) e armazena
  nomes = JSON.parse(localStorage.getItem("cadastro_usuario"));
  senhas = JSON.parse(localStorage.getItem("cadastro_senha"));

  // cria uma varivael vazia para armazenar os dados da lista
  let lista = ""

  //realiza um loop do tam dos vetores
  for (i = 0; i < nomes.length; i++){
     //armazena na varivael lista os dados dos vetores  
      lista += nomes[i] + " - " + senhas[i] + "<br>"

  }

  //mostra a lista dentro da div centro
  document.getElementById("centro").innerHTML = lista

}

function Excluir(){

  // Pega valores do LocalStorage (se tiver) e armazena
  nomes = JSON.parse(localStorage.getItem("cadastro_usuario"));
  senhas = JSON.parse(localStorage.getItem("cadastro_senha"));

   //realiza um loop do tam dos vetores
  for (i = 0; nomes.length; i++){

    //cria uma variavel para armazenar a posição dos dadosa serem exluidos
    let posicaoExcluir

    //compara o valor do input de exclusão com o valor de cada posição do vetor
    if (nomeExcluir.value == nomes[i]) {
      
      //armazena a posiçao (se existir um valor igual)
      posicaoExcluir = i

      //array.splice (posiçao do elemento, qnt de elementos a escluir, qnt de elementos a add)
      //utiliza a posicao para excluir os dados  
      nomes.splice (posicaoExcluir, 1)
      senhas.splice (posicaoExcluir, 1)
  
      //mostra msg de dados excluídos
      alert ("Usuário exluído")

      // Joga para o LocalStorage novamente
      localStorage.setItem("cadastro_usuario", JSON.stringify(nomes))
      localStorage.setItem("cadastro_senha", JSON.stringify(senhas))

    }
    //limpa dados do input exluir
    document.getElementById("excluir") = " "
  
  }




}