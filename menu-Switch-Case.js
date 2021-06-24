
var opcao = Number(prompt("Digte a opção desejada:\n1) Cadastrar 2) Listar 3) Pesquisar 4) Sair\n"))

    if(opcao == 1 || opcao == 2 || opcao == 3 || opcao == 4){
        
        switch (opcao){
            case 1:
                alert("Você escolheu 'Cadastrar'")
                break
        
            case 2:
                alert("Você escolheu 'Listar'")
                break
                
            case 3:
                alert("Você escolheu 'Pesquisar'")
                break    
    
            case 4:
                alert("Você escolheu 'Sair'")
                break        
        }

    } else {
        alert ("Opção inválida")
        }