// Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas.
// Ao final mostrar a média de idade delas e a menor idade dentre essas pessoas. Programar usando FOR ou WHILE.
  
alert ("Vamos fazer uma brincadeira.\nDigite 5 nomes e 5 idades (diferentes de zero).\nVou lhe dizer a média delas e a mais baixa")

var idade, media, nome
var idadeMenor = 10000
var soma = 0

for (i = 0; i < 5; i++){
        nome = prompt ("Digite o NOME da " + (i+1) + "ª pessoa:")
    idade = Number(prompt("Digite a IDADE da " + (i+1) + "ª pessoa:"))
    soma += idade
        if (idade < idadeMenor){
            idadeMenor = idade
        }
}   

media = soma /5

alert ("A média de idades é: " + Math.trunc(media) + "\nE a idade mais baixa é: " + idadeMenor)