// Criar um site onde o usuário poderá clicar em um botão e aumentar a contagem de vezes que esse botão foi clicado. Cada vez que o botão for clicado, uma função devera buscar o valor da quantidade salvo no localstorage e logo após aumentar a quantidade, salva-lo novamente no localstorage. Devera ter um botão de limpar a contagem, onde uma função devera zerar a contagem salva no localstorage.

var soma = 0

if (localStorage.getItem("numeroDigitado") >= 0){
    
    localStorage.getItem("numeroDigitado")
}
document.getElementById("contador").value = soma

function Calcular () {
    
    soma++
    document.getElementById("contador").value = soma
    localStorage.setItem("numeroDigitado", soma)

}

function Zerar (){
    
    soma = 0
    document.getElementById("contador").value = soma
    localStorage.setItem("numeroDigitado", soma)
}