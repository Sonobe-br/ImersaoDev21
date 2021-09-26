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

let carta4 = {
    nome: "Pikachu Shiny",
    imagem:"https://newesc.com/wp-content/uploads/pikachu-shiny-585x600.jpg",
    atributos: {
        ataque: 20,
        defesa: 7,
        magia: 3

    } 
};

let carta5 = {
    nome: "Wolverine",
    imagem: "https://br.web.img2.acsta.net/newsv7/21/04/15/16/04/1040914.jpg",
    atributos: {
        ataque: 125,
        defesa: 107,
        magia: 100 
    }
};

let carta6 = {
    nome:"Ryu",
    imagem:"https://images.nintendolife.com/6b8f4d29a3700/davidoff-ryu.original.jpg",
    atributos: {
        ataque: 31,
        defesa: 13,
        magia: 20
    }
}

let carta7 = {
    nome: "Lunala",
    imagem:"https://pm1.narvii.com/6683/f6e7b2cc733a649ea3b55d2466605eec2a66924e_hq.jpg",
    atributos: {
        ataque: 40,
        defesa: 10,
        magia: 21
    }
}

let carta8 = {
    nome: "Thanos",
    imagem: "https://i.pinimg.com/236x/b0/e3/2f/b0e32fba5221e0e012a9f8e9d060fae5.jpg",
    atributos: {
        ataque: 230,
        defesa: 110,
        magia: 500
    }
}

let carta9 = {
    nome: "IRONMAN",
    imagem: "https://1.bp.blogspot.com/-JpO9__qRzfc/Vl8grNdL38I/AAAAAAAAEKk/yV2vWEVi82Y/s640/ironmanextremis.jpg",
    atributos: {
        ataque: 232,
        defesa: 103,
        magia: 498
    }
}

let carta10 = {
    nome: "VENOM",
    imagem: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/02/footage-of-tom-hardy-on-the-venom-set-gives-away-some-plot-details.jpg",
    atributos: {
        ataque: 252,
        defesa: 198,
        magia: 100
    }
}

let carta11 = {
    nome: "Spider Man",
    imagem: "https://justicageek.com.br/wp-content/uploads/2017/07/Spider-Man-Marvel-Comics-Peter-Parker-h0011.jpg",
    atributos: {
        ataque: 272,
        defesa: 201,
        magia: 100
    }
}

let cartas = [carta1,carta2,carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10, carta11];
let cartaMaquina;
let cartaJogador;

function sortearCarta(){
    let numeroCartaMaquina = parseInt(Math.random() * 11);
    cartaMaquina = cartas[numeroCartaMaquina];
    console.log(cartaMaquina);

    let numeroCartaJogador = parseInt(Math.random() * 11);
    while(numeroCartaMaquina == numeroCartaJogador){
        numeroCartaJogador = parseInt(Math.random() * 11);
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
    } else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
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