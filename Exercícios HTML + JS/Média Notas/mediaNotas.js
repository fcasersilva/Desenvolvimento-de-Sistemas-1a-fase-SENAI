
var nota1 = document.getElementById("n1")
var nota2 = document.getElementById("n2")
var nota3 = document.getElementById("n3")
var nota4 = document.getElementById("n4")

var soma
var media


function CalcMedia (){
    
    soma = Number (nota1.value) + Number (nota2.value) + Number (nota3.value) + Number (nota4.value)
    media = soma/4

    if (media >= 7.00) {
        alert (`Sua média foi: ${media.toFixed(2)}\nParabéns! Aprovado.`)
     
    } else {
        alert (`Sua média foi: ${media.toFixed(2)}\nLamento! Reprovado.`)
    }
}        