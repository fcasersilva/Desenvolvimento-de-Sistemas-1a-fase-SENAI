
function descobreDia (){
    let inputDia = document.getElementById("dias")
    let numeroDia = Number(inputDia.value)
    let diaEquiv

    switch (numeroDia.value){
        case 1: 
            diaEquiv = "DOMINGO" 
        break

        case 2:
            diaEquiv = "SEGUNDA-FEIRA" 
        break

        case 3:
            diaEquiv = "TERÇA-FEITA" 
        break

        case 4:
            diaEquiv = "QUARTA-FEIRA"
        break
        
        case 5:
            diaEquiv = "QUINTA-FEIRA" 
        break

        case 6:
            diaEquiv = "SEXTA-FEIRA" 
        break

        case 7: 
            diaEquiv = "SÁBADO" 
        break

        default:
            diaEquiv = "Não existe dia correspondente"
    }
    alert (diaEquiv)
}    
    