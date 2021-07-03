// Criar uma simulação de páginas de cadastro e login (dois htmls). Elaborar um arquivo JS, que faça a gravação dos dados da tela de cadastro. Na tela seguinte (login) comparar os dados cadastrados, se estiverem corretos mostrar uma mensagem de ok, senão, uma mensagem de erro.


var nomeCadastrado, senhaCadastrada, nomeDigitado, senhaDigitada, nomeSalvo, senhaSalva

function Cadastrar () {
    nomeCadastrado = document.getElementById("nomeCadastrado")
    localStorage.setItem("nomeCadastrado", JSON.stringify(nomeCadastrado.value))
    //esse 1o parametro é apenas pra identificar no Local Storage, pode ser qlqr nome

    senhaCadastrada = document.getElementById("senhaCadastrada")
    localStorage.setItem("senhaCadastrada", JSON.stringify(senhaCadastrada.value))

    alert ("Cadastro realizado")

    window.location.href = "tela-de-login.html"
}

function Logar() {
    nomeSalvo = document.getElementById ("nomeLogin")
    senhaSalva = document.getElementById ("senhaLogin")
    nomeDigitado = JSON.parse(localStorage.getItem("nomeCadastrado"))
    senhaDigitada = JSON.parse(localStorage.getItem("senhaCadastrada"))

    console.log(nomeCadastrado)
    console.log (senhaCadastrada)
    //console.log(nomeDigitado)
    //console.log (senhaDigitada)

    if (nomeDigitado != nomeSalvo.value || senhaDigitada != senhaSalva.value){
        alert ("Usuário ou senha cadastrada inválidos")
    } else {
        alert ("Acesso concedido")
    }
}
