// Fazer um programa no qual o usuário deve montar uma salada de frutas com uma cereja no final.
// Deve ser perguntado em sequência "Qual fruta adicionar?".
// Quando for adicionado a cereja, finalizar com a frase “Sua salada de frutas está pronta!”.
// Programar usando WHILE.

var fruta = ""

alert ("Para montar sua salada de frutas adicione qts fruta desejadar.\nAdicione uma cereja para terminar de montar ou digite 'fim'.")

while (fruta != "cereja" || fruta != "fim"){
   fruta = prompt ("Qual fruta quer adicionar:")

}
alert ("Sua salada de frutas está pronta!")