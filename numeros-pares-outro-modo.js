
var soma = 0
var num, media
var impar = false

alert ("Digite 5 números pares")

for (i = 0; i < 5; i++){
    num = Number(prompt("Digite o " + (i+1) + "o número:"))
   
    if (num % 2 == 0){
       soma += num
    } else {
        impar = "true"
      }
}
media = soma / 5
if (!impar){ 
    alert ("A media dos números pares é: " + media) 

} else{
    alert ("Ao menos um dos números digitados era ímpar")
  
  }