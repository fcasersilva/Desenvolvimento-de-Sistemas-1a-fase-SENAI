
function descobreMes (){
    let mes = document.getElementById("meses")
    let nomeMes

    if (mes.value == 1){
        nomeMes = "Janeiro"
    }
    if (mes.value == 2){
        nomeMes = "Fevereiro"
    }
    if (mes.value == 3){
        nomeMes = "Março"
    }
    if (mes.value == 4){
        nomeMes = "Abril"
    }
    if (mes.value == 5){
        nomeMes = "Maio"
    }
    if (mes.value == 6){
        nomeMes = "Junho"
    }
    if (mes.value == 7){
        nomeMes = "Julho"
    }
    if (mes.value == 8){
        nomeMes = "Agosto"
    }
    if (mes.value == 9){
        nomeMes = "Setembro"
    }
    if (mes.value == 10){
        nomeMes = "Outubro"
    }
    if (mes.value == 11){
        nomeMes = "Novembro"
    }
    if (mes.value == 12){
        nomeMes = "Dezembro"
    } 
    alert (nomeMes)
} 

/* nesse caso a entrada do mês está dentro da função e por isso o src do js fica dentro do HEAD
e não no fim do BODY como de costume */