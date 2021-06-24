
let nome = prompt ("Digite seu nome:")
let idade = Number(prompt ("Digite sua idade:"))
let comorbidade = prompt ("Você possui alguma comorbidade?\n\n Digite 's' para sim ou 'n' para não")

if (comorbidade == "s" || idade >= 60) {
    alert ("Pode se vacinar!")
} else {
    alert ("Espere mais um pouco. Sua vez vai chegar!")
}