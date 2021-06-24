
var arrayfrutasEscolhidas = []

function mostrarFrutas (){
    
    var inputFrutasEscolhidas = document.getElementById("nomeFrutas")
    var frutaDigitada = inputFrutasEscolhidas.value

    console.log(frutaDigitada)
    arrayfrutasEscolhidas.push(frutaDigitada)

    inputFrutasEscolhidas.value = null //esse comando é para limpar as entradas após inserir algo

    if (frutaDigitada === "Cereja" || frutaDigitada === "cereja"){

        document.getElementById("addFruta").disabled = true

        var containerListaFrutas= document.getElementById("containerListaFrutas")
        var lista = document.createElement("ol") // "ol" ou "ul" são as listas "pai"

        for (i = 0; i < arrayfrutasEscolhidas.length; i++){
            var itemListaFrutas = document.createElement("li") //"li" são as listas "filho"
            var textNode = document.createTextNode(arrayfrutasEscolhidas [i])
            
            itemListaFrutas.appendChild(textNode)
            lista.appendChild(itemListaFrutas)
        }
        containerListaFrutas.appendChild(lista)
    }
}