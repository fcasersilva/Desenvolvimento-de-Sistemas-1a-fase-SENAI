// -- criar uma pagina contendo uma lista de compras, e ao clicar no botao todos os itens dessa lista deverão aparecer no console.log()
// -- os itens da lista deveram conter um id e um name, o metodo utilizado para buscar essas listas devera ser getElementsByName

let arrayListaMercado = [];

function mostrarLista()
{
    let arrayListaMercado = document.getElementsByName("item");
    let div = document.getElementById("div");
    console.log(arrayListaMercado);
    console.log(div);
}