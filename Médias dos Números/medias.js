
var nota1 = prompt ("Qual a nota da Prova 1?")
var nota1 = parseFloat (nota1)

var nota2 = prompt ("Qual a nota da Prova 2?")
var nota2 = parseFloat (nota2)

var nota3 = prompt ("Qual a nota da Prova 3?")
var nota3 = parseFloat (nota3)

var nota4 = prompt ("Qual a nota da Prova 4?")
var nota4 = parseFloat (nota4)

var soma = (nota1 + nota2 + nota3 + nota4)

var somatorio = soma.toFixed(2)

var media = soma/ 4
var media = parseFloat (media)

var mediaFinal = media.toFixed(2)

if (mediaFinal >= 7.00) {
    alert ("A soma das suas notas é: " + somatorio + "." + "E sua média final foi: " + mediaFinal + ". " + "Parabéns! Vc foi aprovado.")
     
} else {
    alert ("A soma das suas notas é: " + somatorio + "." + "E sua média final foi: " + mediaFinal + ". " + "Só lamento! Vc foi reprovado.")
    }