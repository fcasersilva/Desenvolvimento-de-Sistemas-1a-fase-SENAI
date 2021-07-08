
let inputLucroLiq = document.getElementById ("lucroLiq")
/*a variavel inputLucroLiq é uma variavel para diferenciar da outra variavel lucroLiq (poderia)
Poderia ser lucroLiq e lucroLiqFinal porém assim fica mais "entendivel" para outras pessoas
*/
let lucroBruto = Number(document.getElementById ("lucroBruto").value)
let numFunc = Number(document.getElementById ("numFunc").value)
let salario = Number(document.getElementById ("salario").value)
let luz = Number(document.getElementById ("luz").value)
let agua = Number(document.getElementById ("agua").value)

function CalcularLucro(){
     
    if (lucroBruto <= 0 || numFunc < 1 || salario < 1000 || salario >= 2500 || luz < 50 || agua < 50) {
        alert ("Reveja as informações digitadas")
    } else {        
        lucroLiq = lucroBruto - (numFunc * salario) - luz - agua
        inputLucroLiq.value = lucroLiq
    } 
}