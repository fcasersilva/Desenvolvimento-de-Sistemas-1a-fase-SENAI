
var usuario, senha, userCadastrado, passCadastrado

function LoginValido () {

    var usuario = document.getElementById("user").value
    var senha = document.getElementById("pass").value
    
    var userCadastrado = "admin"
    var passCadastrado = "admin123"

    if (usuario != userCadastrado || senha != passCadastrado){
        document.write("Usuário ou senha inválidos")
    } else {
        document.write ("Acesso concedido")
    }

document.getElementById("user").value = ""
document.getElementById("pass").value = ""  
}