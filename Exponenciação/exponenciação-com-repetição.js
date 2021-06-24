// Fazer um programa no qual o usuário deve digitar um número e o expoente dele. Mostrar na tela o resultado.
// Programar usando FOR ou WHILE.

var base, exp
var resultado = 1
var i = 0

base = Number(prompt ("Digite a base"))
exp = Number(prompt ("Digte o expoente"))

while (i != exp){
    resultado *= base
    i++
}

alert ("O número " + base + " elevado a " + exp + " é: " + resultado)