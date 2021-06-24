// O sistema devera armazenar o nome do aluno, peso, e o objetivo do aluno que passou pela catraca.
// Assim que 10 alunos passarem pelo sistema, devera realizar uma listagem com nome desses alunos, seus respectivos pesos e seus objetivos na academia.

var qntAlunos = 3
var arrayFichaAlunos = []

function mostrarAlunos (){
    
    var inputNomeDoAluno = document.getElementById("nomeAluno")
    var nomeDigitado = inputNomeDoAluno.value

    var imputPesoDoAluno = document.getElementById("pesoAluno")
    var pesoDigitado = imputPesoDoAluno.value

    var imputObjetivoDoAluno = document.getElementById ("objetivo")
    var objetivoDigitado = imputObjetivoDoAluno.value

    var objetoFichaAlunos = {
        nome: nomeDigitado,
        peso: pesoDigitado,
        objetivo: objetivoDigitado
    }

    arrayFichaAlunos.push(objetoFichaAlunos)

    inputNomeDoAluno.value = null
    imputPesoDoAluno.value = null
    imputObjetivoDoAluno.value = null

    if (j = 0, j <= qntAlunos, j++){

        document.getElementById("addAlunos").disabled = true
  
        var containerListaAlunos = document.getElementById("containerListaAlunos")
        var listaOrdenada = document.createElement("ol")

        for (i = 0; i < arrayFichaAlunos.length; i++){
            var objetoSalvoListaAlunos = arrayFichaAlunos[i]
            var textoItemListaAlunos = document.createTextNode("Nome: " + objetoSalvoListaAlunos.nome + " - Peso: " + objetoSalvoLista.peso + " - Objetivo: " + objetoFichaAlunos.objetivo)
            var itemDaListaAlunos = document.createElement("li")
            
            
            itemDaListaAlunos.appendChild(textoItemListaAlunos)
            listaOrdenada.appendChild(itemDaListaAlunos)
        }
        containerListaAlunos.appendChild(listaOrdenada)
    }
}