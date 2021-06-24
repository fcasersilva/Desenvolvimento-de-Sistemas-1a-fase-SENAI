//DICAS:
// str.toUpperCase() - transforma toda a palavra em maiúscula
// strt.LowerCaser() - transforma toda a palavra em minúscula

var fruta = ""

alert ("Para montar sua salada de frutas adicione qts fruta desejadar.\nPara terminar de montar adicone cereja.")

while (fruta != "CEREJA"){
   fruta = prompt ("Qual fruta quer adicionar:")
   fruta = fruta.toLowerCase()
   //console.log(fruta)
}
alert ("Sua salada de frutas está pronta!")