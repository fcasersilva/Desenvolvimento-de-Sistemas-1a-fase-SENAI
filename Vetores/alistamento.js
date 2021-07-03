// Em cidades menores, o alistamento para o exército acontece esporadicamente ao longo dos anos. Criar um programa no qual que pergunte ao usuário se houve alistamento dos anos 2000 a 2009, uma pergunta para cada ano. Se houve alistamento deve ser digitado “S” e se não houve alistamento “N”. Após digitar tudo, deve-se mostrar na tela o último ano que houve alistamento. Caso não tenha ocorrido alistamento, mostrar “Não houve alistamento nos últimos 10 anos”. (Usar push, lastIndexOf)

var arrayAlistamentos = []
var ano
var ultimoAno

for (i=0; i<10; i++){
    ano = prompt(`Houve alistamentos em 200${i}? S - sim ou N - não.`)
    arrayAlistamentos.push(ano)
}
console.log(arrayAlistamentos)
ultimoAno = arrayAlistamentos.lastIndexOf('S') //pega o indice do ultimo caso

if (arrayAlistamentos[ultimoAno] == "S"){
    alert (`O último ano com alistamento foi em 200${ultimoAno}` )
} else {
    alert ("Não houve alistamentos nos últimos 10 anos")
}