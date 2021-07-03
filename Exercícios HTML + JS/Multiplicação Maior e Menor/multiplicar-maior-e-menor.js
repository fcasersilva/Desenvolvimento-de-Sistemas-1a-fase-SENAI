function Calcular() {

    const primeiroNumero = document.getElementById("numeroUm")
    const segundoNumero = document.getElementById("numeroDois")
    const terceiroNumero = document.getElementById("numeroTres")
    const quartoNumero = document.getElementById("numeroQuatro")
    const quintoNumero = document.getElementById("numeroCinco")

    var numeros = [Number(primeiroNumero.value), Number(segundoNumero.value), Number(terceiroNumero.value), Number(quartoNumero.value), Number(quintoNumero.value)]



    var primeiroResultado = maiorNumero2Parametros(numeros[0], numeros[1]); 
    var segundoResultado = maiorNumero2Parametros(numeros[2], numeros[3]);
    console.log(`O maior numero e ${maiorNumero(primeiroResultado, segundoResultado, numeros[4])}`);
   
    function maiorNumero2Parametros(parametro1, parametro2) {

        //console.log("numero1 tratado", parametro1)
        //console.log("numero2 tratado", parametro2)

        if (parametro1 >= parametro2) {
            console.log("Numero 1 é maior")
            return parametro1;
        } else {
            console.log("Numero 2 é maior")
            return parametro2;
        }
    }


    function maiorNumero3Parametros (parametro1, parametro2, parametro3){

        var maiorParametro = 0
        const numero1Tratado = Number(parametro1)
        const numero2Tratado = Number(parametro2)
        const numero3Tratado = Number(parametro3)
        
        if (numero1Tratado >= numero2Tratado) {
            if(numero1Tratado >= numero3Tratado) {
                maiorParametro = numero1Tratado;
            } else {
                maiorParametro = numero3Tratado;
            }
        } else {
            if(numero2Tratado >= numero3Tratado) {
                maiorParametro = numero2Tratado;
            } else {
                maiorParametro = numero3Tratado;
            }
        }

        return maiorParametro;
    }

}