
// O sistema devera armazenar o nome do aluno, peso, e o objetivo do aluno que passou pela catraca.
// Assim que 10 alunos passarem pelo sistema, devera realizar uma listagem com nome desses alunos, seus respectivos pesos e seus objetivos na academia.

var arrayFrutasEscolhidas = []

function mostrarFrutas (){
    
    var inputFrutasEscolhidas = document.getElementById("nomeFrutas")
    var frutaDigitada = inputFrutasEscolhidas.value

    var imputQtdEscolhida = document.getElementById("qtdEscolhida")
    var qtdDigitada = imputQtdEscolhida.value

    var objetoFrutasEscolhidas = {
        nome: frutaDigitada,
        quantidade: qtdDigitada
    }

    arrayFrutasEscolhidas.push(objetoFrutasEscolhidas)

    inputFrutasEscolhidas.value = null //esse comando é para limpar as entradas após inserir algo
    imputQtdEscolhida.value = null

    if (frutaDigitada === "Cereja" || frutaDigitada === "cereja" || frutaDigitada === "CEREJA"){

        document.getElementById("addFruta").disabled = true
        // outro jeito:
        // var addFruta = document.getElementById("addFruta")
        // addFruta.disabled = true

        var containerListaFrutas = document.getElementById("containerListaFrutas")
        var listaOrdenada = document.createElement("ol") // "ol" ou "ul" são as listas "pai"

        for (i = 0; i < arrayFrutasEscolhidas.length; i++){
            var objetoSalvoLista = arrayFrutasEscolhidas[i]
            var textoItemLista = document.createTextNode(objetoSalvoLista.nome + " - " + objetoSalvoLista.quantidade)
            var itemDaListaFrutas = document.createElement("li") //"li" são as listas "filho"
            
            
            itemDaListaFrutas.appendChild(textoItemLista)
            listaOrdenada.appendChild(itemDaListaFrutas)
        }
        containerListaFrutas.appendChild(listaOrdenada)
    }
}