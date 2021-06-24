
alert ("Vamos fazer uma brincadeira.\nDigite 5 idades (diferentes de zero). Vou lhe dizer a média delas e mais baixa")

let idade, idadeMenor
let soma = 0

idade = Number (prompt("Digite a 1a idade"))
idadeMenor = idade
soma = soma + idade

idade = Number (prompt("Digite a 2a idade"))
soma = soma + idade
    if (idade < idadeMenor){
        idadeMenor = idade
    }

idade = Number (prompt("Digite a 3a idade"))
soma = soma + idade
    if (idade < idadeMenor){
        idadeMenor = idade
    }

idade = Number (prompt("Digite a 4a idade"))
soma = soma + idade
    if (idade < idadeMenor){
        idadeMenor = idade
    }

idade = Number (prompt("Digite a 5a e última idade"))
soma = soma + idade
    if (idade < idadeMenor){
        idadeMenor = idade
    }

let mediaIdades = soma/5

alert ("A média de idades é: " + Math.trunc(mediaIdades) + "\nE a idade mais baixa é: " + idadeMenor)
//O método Math.trunc() retorna a parte inteira de um número, descartando suas casas decimais