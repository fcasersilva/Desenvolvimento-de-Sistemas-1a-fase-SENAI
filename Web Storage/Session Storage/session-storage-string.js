
function Gravar(){
    var nomeDigitado = document.getElementById("nome")
    sessionStorage.setItem("nome", JSON.stringify(nomeDigitado.value))
    console.log(JSON.parse(sessionStorage.getItem("nome")))
} 