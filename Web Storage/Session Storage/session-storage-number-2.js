
function Gravar(){
    var idadeDigitada = document.getElementById("idade")    
    sessionStorage.setItem("idade", idadeDigitada.value)
    //console.log(sessionStorage.getItem("idade"))
} 