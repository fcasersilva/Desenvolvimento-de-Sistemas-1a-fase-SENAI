/* Faça um programa no qual o usuário deve digitar a sequência de números de 1 a 10, invertida.
Caso digite algum número fora da sequência, interromper e mostrar uma mensagem "Você errou a sequência".
Do contrário, mostrar uma mensagem "Você terminou a sequência corretamente". Programar usando FOR. */

var num = 0

alert ("Digite a sequência de 1 a 10 invertida.")

for (i = 9; i > 0; i--){
    
    num = Number(prompt("Digite um número:"))
    if (num != i){
        alert ("Você errou a sequência.")
        break

    }
}   
if (i == 1){ 
    alert ("Você terminou a sequência corretamente.\nObrigado por jogar")
}