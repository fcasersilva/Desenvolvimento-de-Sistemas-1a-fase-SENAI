// Fazer um programa que calcule o fatorial de um número. Fatorial é a multiplicação do próprio número por todos abaixo dele até 1. Exemplo do fatorial de 5 seria: 5x4x3x2x1 = 120. Fatorial de 5 é 120.

var fatorial = 1
var num

num = Number(prompt("Digite um número para saber o fatorial dele:"))

for (i = num; i > 0; i--){
   fatorial = fatorial * i
}

alert (num + "! = " + fatorial)