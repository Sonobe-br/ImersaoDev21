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

function ConverterReal() {
    var valorElemento = document.getElementById('valor');
    var valor = valorElemento.value;
    var valorEmRealNumerico = parseInt(valor); 
    //console.log(valorEmRealNumerico);
    
    //conversão de valores em dólar para real
    var valorEmReal = valorEmRealNumerico.toFixed(2) / 5.24; /* Cotação do dia 14 de setembro 2021 */
    console.log(valorEmReal);

    var elementoValorConvertido = document.getElementById('valorConvertido');
    var valorConvertido = 'O resultado em Dólar é R$' + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;   
}

function ConverterDolar() {
    var elementoValor = document.getElementById('valor');
    var valor = elementoValor.value;
    var valorEmDolarNumerico = parseInt(valor); 
    //console.log(valorEmRealNumerico);
    
    //conversão de valores em dólar para real
    var valorEmDolar = valorEmDolarNumerico.toFixed(1) / 0.18; /* Cotação do dia 14 de setembro 2021 */
    console.log(valorEmDolar);

    var elementoValorConvertido = document.getElementById('valorConvertido');
    var valorConvertido = 'O resultado em Real é R$' + valorEmDolar;
    elementoValorConvertido.innerHTML = valorConvertido;   
}