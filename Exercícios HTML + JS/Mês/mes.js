
var mes = document.getElementById("meses")

function descobreMes (){
    if (mes.value == 1){
        alert ("Janeiro")
    } else if (mes.value == 2){
        alert ("Fevereiro")
    } else if (mes.value == 3){
        alert ("Março")
    } else {
        alert ("Indefinido")
    }
}