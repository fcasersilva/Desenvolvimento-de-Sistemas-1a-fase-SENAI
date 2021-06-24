
let nota, media
let soma = 0 //qdo vamos usar a variavel em alguma soma é recomenda que seja definido que ela comece com 0

nota = Number(prompt("Digite a primeira nota:"))
soma = soma + nota
nota = Number(prompt("Digite a segunda nota:"))
soma = soma + nota
nota = Number(prompt("Digite a terceira nota:"))
soma = soma + nota
nota4 = Number(prompt("Digite a quarta nota:"))
soma = soma + nota

media = soma/4


if (media >= 7.00) {
    alert (`Sua média foi: ${media.toFixed(2)} Parabéns! Aprovado.`)
     
} else {
    alert (`Sua média foi: ${media.toFixed(2)} Lamento! Reprovado.`)
    }