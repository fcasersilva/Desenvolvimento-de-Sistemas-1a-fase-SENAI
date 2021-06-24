// Programar para que o usuário digite 5 números e caso sejam pares, mostre a média deles.
// Se algum número digitado não for par, ao final não será mostrada a média e sim uma mensagem
//“Um dos números digitados era ímpar”. Programar usando FOR.

var soma = 0
var num, media
var impar = false
// essa variavel é um booleano e por isso não precisa aspas
// podria ser algo como impar = "false" ou impar = 0 ou impar = "falso" mas nao seria um booleano

alert ("Digite 5 números pares")

for (i = 0; i < 5; i++){
    num = Number(prompt("Digite o " + (i+1) + "o número:"))
   
    if (num % 2 == 0){
       soma += num
       
    } else {
        impar = "true" // ou impar = 1 ou verdaderio
      }
}
media = soma / 5
if (impar){ //qdo uso booleano não tem a necessidade de fazer if (impar = true). Ele subentende
    alert ("Ao menos um dos números digitados era ímpar")

} else{
  alert ("A media dos números pares é: " + media)
  }