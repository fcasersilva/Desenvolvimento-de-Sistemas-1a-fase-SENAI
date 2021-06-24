// Desenvolver um programa no qual o usuário digite o número de multas que deseja cadastrar e para cada multa deve colocar o valor em reais e os pontos perdidos na carteira de habilitação. Ao final, mostrar o somatório das multas e dos pontos, caso os pontos passem de 21, exibir a mensagem “Você está irregular”, senão, exibir “Você está regular”

qntMultas = Number(prompt("Quantas multas deseja cadastrar?"))
valorMulta = 0
qntPontos = 0
somaMultas = 0
somaPontos = 0

for (i = 0; i < qntMultas; i++){
    valorMulta = Number(prompt("Qual o valor da " + (i+1) + "ª multa?"))
    somaMultas += valorMulta
    //console.log(somaMultas)

    qntPontos = Number(prompt("Quantos pontos você levou por ela?"))
    somaPontos += qntPontos
    //console.log(somaPontos)
} 

if (somaPontos > 21){
    alert (somaMultas + " reais. " + "Você fez " + somaPontos + " pontos." + " Você está irregular.")

} else{
    alert (somaMultas + " reais. " + "Você fez " + somaPontos + " pontos." + " Você está regular.")
}