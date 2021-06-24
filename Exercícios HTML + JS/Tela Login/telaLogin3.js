
var nome, sobrenome, divisao

function LoginValido () {

    var nome = document.getElementById("nome")
    var sobrenome = document.getElementById("sobrenome")
    
    // var userCadastrado = "admin"
    // var passCadastrado = "admin123"

    // if (usuario != userCadastrado || senha != passCadastrado){
    //     document.write("Usuário ou senha inválidos")
    // } else {
    //     document.write ("Acesso concedido")
    // }

    var nomeInserido = document.getElementById("nomeInserido")
    var sobrenomeInserido = document.getElementById("sobrenomeInserido")

    nomeInserido.innerHTML = (`Nome: ${nome.value}`)
    sobrenomeInserido.innerHTML = (`Sobrenome: ${sobrenome.value}`) 
}