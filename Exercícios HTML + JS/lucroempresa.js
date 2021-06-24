function calculaLucro() {

    let inputLucroLiquido = document.getElementById("lucroLiq");
    let lucroBruto = Number(document.getElementById("lucroBruto").value);
    let qtdFuncionarios = Number(document.getElementById("qtdFuncionarios").value);
    let salario = Number(document.getElementById("salario").value);
    let contaLuz = Number(document.getElementById("contaLuz").value);
    let contaAgua = Number(document.getElementById("contaAgua").value);
    
    if (lucroBruto <= 0) {
        alert("Lucro Bruto precisa ser maior que 0")
    }

    



    let lucroLiquido = lucroBruto - (qtdFuncionarios * salario) - contaLuz - contaAgua;

    inputLucroLiquido.value = lucroLiquido;
}





let element = document.getElementById("lucro");
element.value;

element.value = 8




