// Fazer um programa no qual o usuário deve montar uma salada de frutas com uma cereja no final.
// Deve ser perguntado em sequência "Qual fruta adicionar?".
// Quando for adicionado a cereja, finalizar com a frase “Sua salada de frutas está pronta!”.
// Programar usando WHILE.


var fruta

alert ("Para montar sua sala de frutas adicione a fruta desejada. Para terminar de montar adicone cereja")

fruta = prompt ("Adicione uma fruta")

while (fruta != "cereja"){
   fruta = prompt ("Qual outra fruta quer adicionar:")
}
alert ("Sua salada de frutas está pronta!")