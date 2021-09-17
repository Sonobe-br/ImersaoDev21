/* let listaFilmes = ['Vingadores Infinity War','Star Wars The Rise of Sky Walker','Thor Ragnarok'];

listaFilmes.push('Harry Potter');
listaFilmes.push('Harry Potter - Cálice de Fogo');
listaFilmes.push('Rock O lutador');

for (var indice = 0; indice < listaFilmes.length; indice++) {
    document.write('<p>'+ listaFilmes[indice] +'</p>');
} */

var imagensFilmes = ['https://upload.wikimedia.org/wikipedia/pt/thumb/9/90/Avengers_Infinity_War.jpg/250px-Avengers_Infinity_War.jpg','https://images-na.ssl-images-amazon.com/images/I/81nXcPXv69L.jpg','https://a-static.mlcdn.com.br/618x463/thor-ragnarok-blu-ray-filme-acao-marvel/multisomoficial/1100141-1104496/9b4be412a9c4cd22e7cf04483fc4a63b.jpg'];

for(var i = 0; i < imagensFilmes.length; i++) {
    document.write('<img src=' + imagensFilmes[i] +'>')
} 