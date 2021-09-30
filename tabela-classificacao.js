let Vikings = {name: 'MINESSOTA VIKINGS', victories: 3, draws: 4, defeats: 1, scores: 0}
let Browns = {name: 'BROWNS', victories: 5, draws: 4, defeats: 2, scores: 0}
let Bears = {name: 'BEARS', victories: 4, draws: 3, defeats: 6, scores: 0}
let Titans = {name: 'TITANS', victories: 2, draws: 3, defeats: 4, scores: 0}

Vikings.scores = calculaPontos(Vikings);
Browns.scores = calculaPontos(Browns);
Bears.scores = calculaPontos(Bears);
Titans.scores = calculaPontos(Titans);

function calculaPontos(jogador){
    let contaPontos = jogador.victories * 3 + jogador.draws;
    return contaPontos;
}
console.log(Vikings);
console.log(Browns);
console.log(Bears);
console.log(Titans);

let gamers = [Vikings, Browns, Bears, Titans];
console.log(gamers);

function exibeJogadoresNaTela(gamers){
    let elemento = ""
    for (let i = 0; i < gamers.length; i++){
        elemento += "<tr><td>"+ gamers[i].name +"</td>"
        elemento += "<td>"+ gamers[i].victories +"</td>"
        elemento += "<td>"+ gamers[i].draws +"</td>"
        elemento += "<td>"+ gamers[i].defeats +"</td>"
        elemento += "<td>"+ gamers[i].scores +"</td>"
        elemento += "<td><button onClick='adicionarVitoria("+ i +")'>Victories</button></td>"
        elemento += "<td><button onClick='adicionarEmpate("+ i +")'>Draws</button></td>"
        elemento += "<td><button onClick='adicionarDerrota("+ i +")'>Defeats</button></td>"
        elemento += "</tr>"
    }

    let tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(gamers);

function adicionarVitoria(i){
    let gamer = gamers[i];
    gamer.victories++;
    gamer.scores = calculaPontos(gamer);
    exibeJogadoresNaTela(gamers);
}

function adicionarEmpate(i){
    let gamer = gamers[i];
    gamer.draws++;
    gamer.scores = calculaPontos(gamer);
    exibeJogadoresNaTela(gamers);
}

function adicionarDerrota(i){
    let gamer = gamers[i];
    gamer.defeats++;
    gamer.scores = calculaPontos(gamer);
    exibeJogadoresNaTela(gamers);
}