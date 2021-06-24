
let nota, media, nome
let soma = 0

nome = prompt ("Digite seu nome: ")

for (i = 4; i > 0; i--){

    nota = Number(prompt("Digite a nota: "))
    soma += nota
}
media = soma/4

if (media >= 7.00) {
    alert (`Sua média foi: ${media.toFixed(2)}. Parabéns ${nome}! Você foi aprovado.`)
     
} else {
    alert (`Sua média foi: ${media.toFixed(2)}. Lamento ${nome}! Você foi reprovado.`)
    }