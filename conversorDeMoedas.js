function Converter() {
    var valorElemento = document.getElementById('valor');
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseInt(valor); 
    //console.log(valorEmDolarNumerico);
    
    //conversão de valores em dólar para real
    var valorEmDolar = valorEmDolarNumerico.toFixed(2) / 5.24; /* Cotação do dia 14 de setembro 2021 */
    console.log(valorEmDolar);

    var elementoValorConvertido = document.getElementById('valorConvertido');
    var valorConvertido = 'O resultado em real é R$' + valorEmDolar;
    elementoValorConvertido.innerHTML = valorConvertido;   
}

