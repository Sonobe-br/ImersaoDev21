let carta1 = {
    nome: "Bulbasauro",
    imagem: "https://mestrepokemon.com/wp-content/uploads/2019/11/Bulbasaur-Pok%C3%A9dex.jpg",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6

    } 
};

let carta2 = {
    nome: "Darth Vader",
    imagem:"https://upload.wikimedia.org/wikipedia/commons/3/32/Star_Wars_-_Darth_Vader.jpg",
    atributos: {
        ataque: 9,
        defesa: 8,
        magia: 2

    } 
};

let carta3 = {
    nome: "Shiryu de Dragão",
    imagem:"https://i.pinimg.com/originals/f5/08/64/f50864fc85dc9647ec4294a9c7d3ffb2.jpg",
    atributos: {
        ataque: 5,
        defesa: 9,
        magia: 10

    } 
};

let cartas = [carta1,carta2,carta3];
let cartaMaquina;
let cartaJogador;

function sortearCarta(){
    let numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];
    console.log(cartaMaquina);

    let numeroCartaJogador = parseInt(Math.random() * 3);
    while(numeroCartaMaquina == numeroCartaJogador){
        numeroCartaJogador = parseInt(Math.random() * 3);
    }

    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
    
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirCartaJogador(); //função na linha 96
}

function obtemAtributoSelecionado(){
    let radioAtributos = document.getElementsByName("atributo"); 
    for (let i = 0; i < radioAtributos.length; i++){
        if (radioAtributos[i].checked == true){
        return radioAtributos[i].value; 
        }
    }
}

function jogar(){
    let atributoSelecionado = obtemAtributoSelecionado();
    let divResultado = document.getElementById("resultado");

    if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
        htmlResultado = "<p class = 'resultado-final'>You Win</p>";
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
        htmlResultado = "<p class = 'resultado-final'>You Loose</p>";
    } else {
        htmlResultado = "<p class = 'resultado-final'>Draw</p>";
    }
    divResultado.innerHTML = htmlResultado;

    document.getElementById('btnJogar').disabled = true;
    exibirCartaMaquina();
}

function exibirCartaJogador(){
    let divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    //divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"; esta é a mesma forma de descrever o código como na linha 98;
    
    let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style="width: inherit; height: inherit; position: absolute;">';
    let tagHTML = "<div id='opcoes' class='carta-status'>";  

    let opcoesTexto = "";
    for (let atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"; 
    }
    
    let nome = `<p class = "carta-subtitle">${cartaJogador.nome}</p>`

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

function exibirCartaMaquina(){
    let divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    
    let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style="width: inherit; height: inherit; position: absolute;">';
    let tagHTML = "<div id='opcoes' class='carta-status'>";  

    let opcoesTexto = "";
    for (let atributo in cartaMaquina.atributos){
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>"; 
    }
    
    let nome = `<p class = "carta-subtitle">${cartaMaquina.nome}</p>`;

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";

}