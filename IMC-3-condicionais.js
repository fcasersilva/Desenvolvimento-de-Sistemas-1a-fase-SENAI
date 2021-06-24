
var peso = prompt ("Digite seu peso (ex: 60.0 kg):")
var altura = prompt ("Digite sua altura (ex: 1.70 m):")
var imc = (peso / (altura *altura)) 

if(imc < 18.5){
    alert("Seu IMC é: " + imc.toFixed(1) + "\n\n Você está ABAIXO da faixa de peso ideal")
} else if (imc > 25) {
    alert("Seu IMC é: " + imc.toFixed(1) + "\n\n Você está ACIMA da faixa de peso ideal")	
} else {
    alert("Seu IMC é: " + imc.toFixed(1) + "\n\n Você está DENTRO da faixa de peso ideal")
}