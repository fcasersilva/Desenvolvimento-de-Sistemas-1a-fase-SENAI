
function descobreMes (){
    let input = document.getElementById("meses")
    let nomeMes = Number(input.value)
    let mesEquiv

    switch (nomeMes){
        case 1:
            mesEquiv = "JANEIRO" 
            break

        case 2:
            mesEquiv = "FEVEREIRO"
            break

        case 3:
            mesEquiv = "MARÇO" 
            break

        case 4:
            mesEquiv = "ABRL" 
            break
        
        case 5:
            mesEquiv = "MAIO" 
            break

        case 6:
            mesEquiv = "JUNHO" 
            break

            case 7:
            mesEquiv = "JULHO"
            break

        case  8:
            mesEquiv = "AGOSTO"
            break

        case 9:
            mesEquiv =  "SETEMBRO" 
            break

        case 10:
            mesEquiv = "OUTUBRO" 
            break

        case 11:
            mesEquiv  = "NOVEMBRO"
            break

        case 12:
            mesEquiv = "DEZEMBRO" 
            break

        default:
            mesEquiv = "Não existe mês correspondente"
    }
    alert (mesEquiv)
}    
    