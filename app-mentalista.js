var numeroSecreto = parseInt(Math.random()*11);

function Chutar(){
    var elementoResultado = document.getElementById('resultado');
    var tentativa = parseInt(document.getElementById('valor').value); 
    console.log(tentativa);
    
    if (tentativa == numeroSecreto){
        elementoResultado.innerHTML = 'Yeah! You win!';
    } else if(tentativa > 10 || tentativa < 0){
        elementoResultado.innerHTML = 'Você deve digitar números de 0 a 10';
    }else{
        elementoResultado.innerHTML = 'Errou, o número secreto era ' + numeroSecreto;
    }   
}


