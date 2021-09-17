/* let listaFilmes = ['Vingadores Infinity War','Star Wars The Rise of Sky Walker','Thor Ragnarok'];

listaFilmes.push('Harry Potter');
listaFilmes.push('Harry Potter - Cálice de Fogo');
listaFilmes.push('Rock O lutador');

for (var indice = 0; indice < listaFilmes.length; indice++) {
    document.write('<p>'+ listaFilmes[indice] +'</p>');
} */

var imagensFilmesFixaoCientifica = ['https://upload.wikimedia.org/wikipedia/pt/thumb/9/90/Avengers_Infinity_War.jpg/250px-Avengers_Infinity_War.jpg','https://images-na.ssl-images-amazon.com/images/I/81nXcPXv69L.jpg','https://a-static.mlcdn.com.br/618x463/thor-ragnarok-blu-ray-filme-acao-marvel/multisomoficial/1100141-1104496/9b4be412a9c4cd22e7cf04483fc4a63b.jpg',
'https://entreterse.com.br/wp-content/uploads/2021/04/Passageiro-Acidental-poster.jpg','http://engenhariadocinema.com.br/wp-content/uploads/2021/07/Resident_evil_infinite_darkness_ver3_xxlg.jpg','https://br.web.img2.acsta.net/pictures/18/06/11/17/46/3758033.jpg'] 
for(var i = 0; i < imagensFilmesFixaoCientifica.length; i++){
    document.write('<img src=' + imagensFilmesFixaoCientifica[i] +'>')
} 

var imagensFilmesTerror = ['https://upload.wikimedia.org/wikipedia/pt/8/82/It_2017.jpg','https://br.web.img2.acsta.net/pictures/210/069/21006915_2013051800092352.jpg','https://br.web.img3.acsta.net/medias/nmedia/18/87/27/02/19873761.jpg','https://www.itaucinemas.com.br/_img/_filmes/1375_capa.jpg?O-Iluminado','http://vortexcultural.com.br/images/2015/10/Sexta-feira-13-poster.jpg','https://upload.wikimedia.org/wikipedia/pt/1/1c/The_Ring_%282002%29.jpg']
for(var t = 0; t < imagensFilmesTerror.length; t++){
    document.write('<img src=' + imagensFilmesTerror[t] + '>')
} 

var imagensGames =['https://live.staticflickr.com/65535/49175958196_6716038657_c.jpg','https://m.media-amazon.com/images/I/91VKfyGGkYL._AC_SY879_.jpg','https://cdn.cdkeys.com/700x700/media/catalog/product/f/o/fortnite-the-last-laugh-bundle-ps4.jpg','http://cdn.shopify.com/s/files/1/0355/8296/7943/products/71GhOnVa3aL._AC_SX385_1024x.jpg?v=1604996727','https://m.media-amazon.com/images/I/61zWIw7-S3S._AC_SX342_.jpg','https://cdn.awsli.com.br/1000x1000/53/53761/produto/42948025/b62740b221.jpg']
for(g = 0; g < imagensGames.length; g++){
    document.write('<img src =' + imagensGames[g] + '>')
}