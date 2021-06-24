
var salarioAnual = Number(prompt ("Qual seu salário anual? R$ (ex: 18000.00)"))
var pisoSalarial = Number(prompt ("Qual a média salárial mensal da categoria? R$ (ex: 1600.00)"))
var mediaSalario = salarioAnual / 12

    if(mediaSalario < pisoSalarial){
        alert("Seu salário mensal é de: " + mediaSalario.toFixed(2) + "\n\nVocê está ABAIXO do piso da categoria.")
    
    } else if (mediaSalario > pisoSalarial) {
        alert("Seu salário mensal é de: " + mediaSalario.toFixed(2) + "\n\nVocê está ACIMA do piso da categoria.")
    
    } else {
        alert("Seu salário mensal é de: " + mediaSalario.toFixed(2) + "\n\nVocê é a média salarial da categoria.")
    }