let Daniel = {nome: 'Daniel', vitorias: 3, empates: 4, derrotas: 1, pontos: 0}
let Pedro = {nome: 'Pedro', vitorias: 5, empates: 4, derrotas: 2, pontos: 0}
let Anita = {nome: 'Anita', vitorias: 4, empates: 3, derrotas: 6, pontos: 0}
let Bruna = {nome: 'Bruna', vitorias: 2, empates: 3, derrotas: 4, pontos: 0}

Daniel.pontos = calculaPontos(Daniel);
Pedro.pontos = calculaPontos(Pedro);
Anita.pontos = calculaPontos(Anita);
Bruna.pontos = calculaPontos(Bruna);

function calculaPontos(jogador){
    let contaPontos = jogador.vitorias * 3 + jogador.empates;
    return contaPontos;
}
console.log(Daniel);
console.log(Pedro);
console.log(Anita);
console.log(Bruna);

let gamers = [Daniel, Pedro, Anita, Bruna];
console.log(gamers);

function exibeJogadoresNaTela(gamers){
    let elemento = ""
    for (let i = 0; i < gamers.length; i++){
        elemento += "<tr><td>"+ gamers[i].nome +"</td>"
        elemento += "<td>"+ gamers[i].vitorias +"</td>"
        elemento += "<td>"+ gamers[i].empates +"</td>"
        elemento += "<td>"+ gamers[i].derrotas +"</td>"
        elemento += "<td>"+ gamers[i].pontos +"</td>"
        elemento += "<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
        elemento += "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td>"
        elemento += "</tr>"
    }

    let tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(gamers);

function adicionarVitoria(i){
    let gamer = gamers[i]
    gamer.vitorias++
    gamer.pontos = calculaPontos(gamer)
    exibeJogadoresNaTela(gamers)
}

function adicionarEmpate(i){
    let gamer = gamers[i]
    gamer.empates++
    gamer.pontos = calculaPontos(gamer)
    exibeJogadoresNaTela(gamers)
}

function adicionarDerrota(i){
    let gamer = gamers[i]
    gamer.derrotas++
    gamer.pontos = calculaPontos(gamer)
    exibeJogadoresNaTela(gamers)
}