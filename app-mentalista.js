var numeroSecreto = parseInt(Math.random()*11);

function Chutar(){
    var elementoResultado = document.getElementById('resultado');
    var tentativa = parseInt(document.getElementById('valor').value); 
    console.log(tentativa);
    
    if (tentativa == numeroSecreto){
        elementoResultado.innerHTML = 'Yeah! You win!';
    } else if(tentativa > 10 || tentativa < 0){
        elementoResultado.innerHTML = 'You must enter numbers from 0 to 10';
    }else{
        elementoResultado.innerHTML = 'You missed the secret number';
        /* elementoResultado.innerHTML = 'Errou, o número secreto era ' + numeroSecreto; */
    }   
}


