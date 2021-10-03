function Converter() {
    var valorElemento = document.getElementById('valor');
    var valor = valorElemento.value;
    var valorEmRealNumerico = parseInt(valor); 
    //console.log(valorEmDolarNumerico);
    
    var valorEmReal = valorEmRealNumerico.toFixed(2) * 5.38; /* Cotação do dia 2 de outubro 2021 */
    console.log(valorEmReal);
    
    var elementoValorConvertido = document.getElementById('valorConvertido');
    var valorConvertido = 'The result in Real is R$' + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;   
    }

    //convertendo real para dólar
    function Convertido() {
    let elementoValor = document.getElementById('valores');
    let valores = elementoValor.value;
    let valorEmDolarNumerico = parseInt(valores); 
        
    let valorEmDolar = valorEmDolarNumerico.toFixed(2) / 5.00; /* Cotação do dia 2 de outubro 2021 */
    console.log(valorEmDolar);
    
    let elementoMoedaConvertida = document.getElementById('trocandoValores');
    let trocandoValores = 'The result in Dollar is US$' + valorEmDolar;
    elementoMoedaConvertida.innerHTML = trocandoValores;   
    }