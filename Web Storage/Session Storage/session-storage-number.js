
var idadeDigitada = Number(prompt ("Qual sua idade?"))

sessionStorage.setItem("idade", idadeDigitada)
console.log(sessionStorage.getItem("idade"))
// ou alert(sessionStorage.getItem...)