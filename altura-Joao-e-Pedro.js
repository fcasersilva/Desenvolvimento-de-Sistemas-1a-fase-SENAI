// Joãozinho mede 1,75m de altura e cresce 1cm por ano, enquanto seu amigo Pedrinho tem 1,60m de altura
// e cresce 3cm por ano. Faça um programa que calcule e mostre em quantos anos Pedrinho
// será mais alto que Joãozinho. Usar o WHILE

var altJoao = 1.75
var altPedro = 1.60
ano = 0

while (altJoao > altPedro) {
    altJoao += 0.01
    altPedro += 0.03
    ano++
}
alert(`Após ${ano} anos, Pedro terá ${altPedro}m e João terá ${altJoao}m`)