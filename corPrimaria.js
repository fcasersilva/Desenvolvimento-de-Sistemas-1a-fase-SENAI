let corPrimaria

corPrimaria = prompt("Digite uma cor primária: ")

    if(corPrimaria == 'vermelho' || corPrimaria == 'amarelo' || corPrimaria == 'azul' ){

        switch(corPrimaria){

            case 'vermelho':
    
                alert("A cor escolhida foi vermelho!")
                break
            
            case 'amarelo':
    
                alert("A cor escolhida foi amarelo!")
                break
     
            case 'azul':
              
                alert("A cor escolhida foi azul!")
                break
    
        }
    
    }else{

        alert("A cor escolhida não é uma cor primária!")

    }
