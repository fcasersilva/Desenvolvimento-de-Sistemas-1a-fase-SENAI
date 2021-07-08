
var topo = 8848
var acampamento = 5360
var dia = 0 
var altitude = 0
var soma

for (i = 1 ; i < 9; i++){
    dia = Number(prompt("Quantos metros foram escalados no dia?"))
    altitude = altitude + dia
    soma = altitude + acampamento
    //console.log(soma)
        if(soma > topo){
            alert(`Você chegou ao topo em ${i} dias`)
            break;
        }   
}
if(soma < topo){
    alert("É melhor voltar, pois pode acabar o oxigênio")
}