function adicionarFilme(){
    let campoFilmeFavorito = document.getElementById("filme").value;
    if(campoFilmeFavorito.endsWith(".jpg")){
        let elementoFilmeFavorito = "<img src=" + campoFilmeFavorito + ">";
        let elementoListaFilmes = document.getElementById("listaFilmes");
        elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
    }else{
        console.error("Endereço de filme inválido");
    }
    
    document.getElementById("filme").value = "";
}