
var usuario, senha, userCadastrado, passCadastrado

function LoginValido () {

    var usuario = document.getElementById("user").value
    var senha = document.getElementById("pass").value
    
    var userCadastrado = "admin"
    var passCadastrado = "admin123"

    if (usuario != userCadastrado || senha != passCadastrado){
        alert("Usuário ou senha inválidos")
    } else {
        alert ("Acesso concedido")
    }

document.getElementById("user").value = ""
document.getElementById("pass").value = ""  
}