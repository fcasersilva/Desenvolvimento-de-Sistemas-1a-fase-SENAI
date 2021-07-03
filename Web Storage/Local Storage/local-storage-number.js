
function Gravar(){
    var idadeDigitada = document.getElementById("idade")    
    localStorage.setItem("idade", idadeDigitada.value)
}