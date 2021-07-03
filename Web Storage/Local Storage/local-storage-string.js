
function Gravar(){
    var nomeDigitado = document.getElementById("nome")
    localStorage.setItem("nome", JSON.stringify(nomeDigitado.value))
    console.log(JSON.parse(localStorage.getItem("nome")))
} 