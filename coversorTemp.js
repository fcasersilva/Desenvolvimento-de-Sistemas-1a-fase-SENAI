
var tempCelcEntrada = prompt ("Qual o valor da temperatura em Celsius?")

var tempCelcSaida = parseFloat (tempCelcEntrada)
var tempCelcSaidaAprox = tempCelSaida.toFixed(1)

var tempFahr = (tempCelcSaida * (9/5)) + 32
var tempFahrAprox = tempFah.toFixed(1)

alert (tempCelcSaida + "ºC são aproximadamente " + tempFahrAprox + "ºF")