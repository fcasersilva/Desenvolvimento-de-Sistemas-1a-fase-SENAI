// Fazer um programa no qual o usuário deve digitar 10 números entre 0 e 50.
// Ao final deve mostrar o maior número digitado. Os números digitados que não estiverem entre 0 e 50,
// devem ser desconsiderados. Programar usando FOR ou WHILE.

var num
var numMaior = -10000

alert ("Digite 10 números entre 0 e 50.")

for (i = 0; i < 10; i++){
    num = Number(prompt("Digite o " + (i+1) + "º número:"))

    if (num > numMaior){
    
      if(num >= 0 && num <= 50){
          numMaior = num
      }
    
    }
}            
alert ("O maior número digitado foi: " + numMaior)