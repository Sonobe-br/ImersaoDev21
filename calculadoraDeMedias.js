const nome = "Daniel"
let notaDoPrimeiroBimestre = 9;
let notaDoSegundoBimestre = 7;
let notaDoTerceiroBimestre = 4;
let notaDoQuartoBimestre = 2;

let notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4;
let notaFixada = notaFinal.toFixed(2);
  
console.log("Bem-vindo " + nome)
console.log(notaFixada)

var mediaConvertida = document.getElementById('valorConvertido');
var valorConvertido = 'O resultado da sua média é' + notaFixada;
mediaConvertida.innerHTML = valorConvertido; 

/* Revisão:
Aprendemos sobre valores do tipo 'string' e number, também vimos as saídas dos resultados usando console.log 
com concatenação, toFixed, operações aritméticas */

/* var time = new Date();
console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()); */
