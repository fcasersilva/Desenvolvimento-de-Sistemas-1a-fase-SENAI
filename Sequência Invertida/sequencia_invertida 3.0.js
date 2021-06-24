/* Faça um programa no qual o usuário deve digitar a sequência de números de 1 a 10, invertida.
Caso digite algum número fora da sequência, interromper e mostrar uma mensagem "Você errou a sequência".
Do contrário, mostrar uma mensagem "Você terminou a sequência corretamente". Programar usando FOR. */

var num = 0
var i = 1
// "forçando" i = 1. Se o 1o num for != 10 ele NÃO cai na condição do 2o if

alert ("Digite a sequência de 1 a 10 invertida.")

num = Number(prompt("Digite o 1o número:"))

if (num !=10){
    alert ("Você errou a sequência.")
} else {
    for (i = 9; i > 0; i--){
    
        num = Number(prompt("Digite o próximo número:"))
        if (num != i){
            alert ("Você errou a sequência.")
            break
        }
    }
}
if (i == 0){
    alert ("Você terminou a sequência corretamente.\nObrigado por jogar")
} else {
    alert ("Fim de jogo.\nObrigado por jogar")
    }