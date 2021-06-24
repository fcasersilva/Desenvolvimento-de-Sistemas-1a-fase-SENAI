function Enviar() {

    var titulo = document.getElementById("titulo").value
    var conteudo = document.getElementById("conteudo").value
    var cor_fundo = document.getElementById("corFundo").value
    var tam_fonte = document.getElementById("tamanhoFonte").value
    var cor_fonte = document.getElementById("corTexto").value
    // o nome da variavel não precisa ser igual ao nome do input
    
    document.write (`<body bgcolor = "${cor_fundo}">`)
    document.writeln (`<h1>${titulo}</h1>`)
    document.writeln (`<p style="font-size: ${tam_fonte}px; color: ${cor_fonte}">${conteudo}</p>`)
    
    // OUTRA FORMA DE FAZER
    // var div = document.getElementById("div")
    // var body = document.getElementById("body")
    // body.style `background-color = ${cor_fundo};`
    // div.style `background-color = ${cor_fundo};`
    // div.innerHTML += `<h1>${titulo}<\h1>`
    // div.innerHTML += <p>${conteudo}<\p>
    // div.innerHTML += <p style="font-size: ${tam_fonte}px; color: ${cor_fonte}">${conteudo}</p>
}    