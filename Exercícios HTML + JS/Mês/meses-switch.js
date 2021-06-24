function pegarNomeMes() {
    let inputNumeroMes = document.getElementById("numeroMes");

    let valueNumeroMes = Number(inputNumeroMes.value);
    let nomeMes;

    switch(valueNumeroMes) {
        case 1: 
            nomeMes = "JANEIRO-1"
            break;
        case 2: 
            nomeMes = "FEVEREIRO - 2"
            break;
        default:
            nomeMes = "Nao identificado"
    }

    console.log(nomeMes)
    alert(nomeMes)
}


function pegarNomeMesIf() {
    let inputNumeroMes = document.getElementById("numeroMes");

    let valueNumeroMes = Number(inputNumeroMes.value);
    let nomeMes = "Vazio";

    if(valueNumeroMes === 1) {
        nomeMes = "JANEIRO - 1"
    }
    if(valueNumeroMes === 2) {
        nomeMes = "FEVEREIRO - 2"
    }
    if(valueNumeroMes === 3) {
        nomeMes = "MARCO - 3"
    }
    if(valueNumeroMes === 4) {
        nomeMes = "ABRIL - 4"
    }
    if(valueNumeroMes === 5) {
        nomeMes = "MAIO - 5"
    }
    if(valueNumeroMes === 6) {
        nomeMes = "JUNHO - 6"
    }
    if(valueNumeroMes === 7) {
        nomeMes = "JULHO - 7"
    }
    if(valueNumeroMes === 8) {
        nomeMes = "AGOSTO - 8"
    }
    if(valueNumeroMes === 9) {
        nomeMes = "SETEMBRO - 9"
    }
    if(valueNumeroMes === 10) {
        nomeMes = "OUTUBRO - 10"
    }
    if(valueNumeroMes === 11) {
        nomeMes = "NOVEMBRO - 11"
    }
    if(valueNumeroMes === 12) {
        nomeMes = "DEZEMBRO - 12"
    }

    console.log(nomeMes)
    alert(nomeMes)
}