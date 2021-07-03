// Criar uma simulação de páginas de cadastro e login (dois htmls). Elaborar um arquivo JS, que faça a gravação dos dados da tela de cadastro. Na tela seguinte (login) comparar os dados cadastrados, se estiverem corretos mostrar uma mensagem de ok, senão, uma mensagem de erro.

var nomeCadastrado = document.getElementById("nomeDeCadastrado")
var senhaCadastrada = document.getElementById("senhaDeCadastro")

var nomeSalvo = document.getElementById ("nomeLogin")
var senhaSalva = document.getElementById ("senhaLogin")

var arrayNomes = []
var arraySenhas = []

function Cadastrar () {

    var verificaUser = JSON.parse(localStorage.getItem("nomeCadastrado"))

    if (verificaUser == null){
            arrayNomes = []
            arrayNomes.push (nomeCadastrado.value)
            arraySenhas.push (senhaCadastrada.value)
            localStorage.setItem("nome", JSON.stringify(nomeCadastrado.value))
            localStorage.setItem("senha", JSON.stringify(senhaCadastrada.value))
    } else {
            arrayNomes.push (nomeCadastro.value)
            arraySenhas.push (senhaCadastrada.value)
            localStorage.setItem("nome", JSON.stringify(arrayNomes))
            localStorage.setItem("senha", JSON.stringify(arraySenhas))
        }
    alert ("Cadastro realizado")

}

function Logar() {

    arraySenhas = JSON.parse(localStorage.getItem("nomeDeCadastrado"))
    arraySenhas = JSON.parse(localStorage.getItem("senhaDeCadastro"))

    // console.log(arrayNomes)
    // console.log(arraySenhas)

    for (i = 0; i < arrayNomes.length; i++){
        
        if (nomeSalvo.valeu == arrayNomes[i]){
            
            if(senhaSalva.value == senhas[i]){
                alert ("Login efetuado")
            
            }else{
                alert ("Usuário ou Senha inválidos")
            }

            
        }
    }

}
function Pular (){
    window.location.href = "tela-de-login-2.html"
}