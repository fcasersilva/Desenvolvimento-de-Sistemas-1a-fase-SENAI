
var nota
var soma
var media

nota = Number(prompt("Digite o primeiro número"))
soma = soma + nota
nota = Number(prompt("Digite o segundo número"))
soma = soma + nota
nota = Number(prompt("Digite o terceiro número"))
soma = soma + nota
nota4 = Number(prompt("Digite o quarto número"))
soma = soma + nota

media = soma/4


if (media >= 7.00) {
    alert (`Sua média foi: ${media.toFixed(2)} Parabéns! Aprovado.`)
     
} else {
    alert (`Sua média foi: ${media.toFixed(2)} Lamento! Reprovado.`)
    }