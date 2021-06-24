
alert ("Me diga qual a qnt de cada voto e eu lhe digo o percentual de cada um")
alert ("Vamos lá!")

var totalVotos = prompt ("Quantas pessoas votaram?")
var totalVotosFinal = parseFloat (totalVotos)

var votosValidos = prompt ("Qual o total de votos válidos?")
var votosValidosFinal = parseFloat (votosValidos)

var votosBrancos = prompt ("Qual o total de votos brancos?")
var votosBrancosFinal = parseFloat (votosBrancos)

var votosNulos = prompt ("Qual o total de votos nulos?")
var votosNulosFinal = parseFloat (votosNulos)

var somaVotos = votosValidosFinal + votosBrancosFinal + votosNulosFinal

var percValidos = ((votosValidos / totalVotos) * 100)
var percBrancos = ((votosBrancos / totalVotos) * 100)
var percNulos = ((votosNulos / totalVotos) * 100)

if (somaVotos == totalVotos){
    alert ("Os percentual de votos validos, brancos e nulos é respectivamente: " + percValidos + "%, " + percBrancos + "%, " + percNulos + "%, ")
} else {
    alert ("Ops! Tem algo errado. Contou direito os votos?")
}