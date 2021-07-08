// Criar uma simulação de páginas de cadastro e login (dois htmls). Elaborar um arquivo JS, que faça a gravação dos dados da tela de cadastro. Na tela seguinte (login) comparar os dados cadastrados, se estiverem corretos mostrar uma mensagem de ok, senão, uma mensagem de erro.
//Modelo Comentado: Técnico Desenv Sistemas 2021 - SENAI\Lógica de Programação\Exercícios VS code\Web Storage\Local Storage\Cadastro e Login 2

var nomeCadastrado = document.getElementById("nomeDeCadastro")
var senhaCadastrada = document.getElementById("senhaDeCadastro")

var nomeSalvo = document.getElementById ("nomeLogin")
var senhaSalva = document.getElementById ("senhaLogin")

var arrayNomes = []
var arraySenhas = []

function Cadastrar () {

   arrayNomes = JSON.parse(localStorage.getItem("nomeCadastrado"))
   arraySenhas = JSON.parse(localStorage.getItem("senhaCadastrada"))

    if (arrayNomes == null){
            arrayNomes = []
            arraySenhas = []

            arrayNomes.push (nomeCadastrado.value)
            arraySenhas.push (senhaCadastrada.value)
            
            localStorage.setItem("nome", JSON.stringify(nomeCadastrado.value))
            localStorage.setItem("senha", JSON.stringify(senhaCadastrada.value))
    } else {
            arrayNomes.push (nomeCadastrado.value)
            arraySenhas.push (senhaCadastrada.value)
            
            localStorage.setItem("nome", JSON.stringify(arrayNomes))
            localStorage.setItem("senha", JSON.stringify(arraySenhas))
        }
    alert ("Cadastro realizado")

}

function Logar() {

    arrayNomes = JSON.parse(localStorage.getItem("nomeCadastrado"))
    arraySenhas = JSON.parse(localStorage.getItem("senhaCadastrada"))

    var logar = 0

    for(i=0; i < arrayNomes.length; i++){

        // Se o nome e senha no input do login forem iguais ao nome e senha da vez no loop
        if(nomeSalvo.value == nomes[i] && senhaSalva.value == senhas[i]){
          // Flag "logar" ativa	
	       logar = 1
        }
    // console.log(arrayNomes)
    // console.log(arraySenhas)
  
    if (logar == 1){
        alert ("Login efetuado")
            
        }else{
            alert ("Usuário ou Senha inválidos")
            }
        
    }

}

function Pular (){
    window.location.href = "tela-de-login-2.html"
}