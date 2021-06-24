// Um hotel possui 130 leitos no total, mas devido a problemas, está atendendo somente com capacidade de 50% leitos, sendo que desses, 25 estão ocupados pelas próximas semanas. Faça um programa que o usuário digite o número de pessoas que entra (com números positivos) e o número de pessoas que saem (com números negativos). Caso a capacidade de 50% seja ultrapassada, mostrar mensagem “não é possível pois ultrapassa a capacidade em X leitos”, sendo X o número a mais de hóspedes que ficariam sem leito

var numLeitos = 40
var hospedes = 0
var leitosVagos = 0
var leitosExcedentes = 0
var controle = 0

while (leitosVagos <= numLeitos){
    controle = Number(prompt("Digite 1 para entrada ou 2 para saída de hópedes"))
         if (controle == 1) {
            hospedes = Number(prompt("Quantas pessoas querem entrar?"))
            leitosVagos += hospedes
            //console.log (leitosVagos)
        } else {
            hospedes = Number(prompt("Quantas pessoas querem sair?"))
            leitosVagos -= hospedes
            //console.log (leitosVagos)   
        }
}  
    leitosExcedentes = leitosVagos - numLeitos
    //console.log(leitosExcedentes)
    alert ("Não é possível pois ultrapassa a capacidade em " + leitosExcedentes + ".")
