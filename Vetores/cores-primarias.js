// Fazer um programa no qual o usuário deve digitar as três cores primárias (amarelo, vermelho, azul) e armazenar em um vetor. Solicitar três vezes “Digite uma cor primária: ”. Em seguida deve digitar as três cores secundárias (laranja, verde, violeta) e armazenar em outro vetor. Solicitar três vezes “Digite uma cor secundária: ”. Um novo vetor deve ser criado com cores primárias + secundárias (amarelo, vermelho, azul, laranja, verde, violeta). No início dessa lista deve-se adicionar preto e no final branco. Perguntar “Adicionar no início da lista: ” e “Adicionar ao final da lista: ”. Mostrar na tela a sequência completa, incluindo preto e branco. (Utilizar push, unshift e concat).


var arrayCoresPrimarias = []
var arrayCoressecundarias = []
var arrayTodasCores = []
var cor

for (i=0; i < 3; i++){
    cor = prompt("Digite uma cor primária: ")
    arrayCoresPrimarias.push(cor)
    }

for (i=0; i < 3; i++){
    cor = prompt("Digite uma cor secundária: ")
    arrayCoressecundarias.push(cor)
}

arrayTodasCores = arrayCoresPrimarias.concat(arrayCoressecundarias)

alert(arrayTodasCores)

cor = prompt("Qual cor adicionar no início: ")
   arrayTodasCores.unshift(cor)

   cor = prompt("Qual cor adicionar no final: ")
   arrayTodasCores.push(cor)

alert(arrayTodasCores)