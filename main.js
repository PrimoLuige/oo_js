/**/

function fox(modelo, fabricante, anoModelo) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
   
}

function bYd(modelo, fabricante, anoModelo, anoFabricacao) {
    fox.call(this, modelo, fabricante, anoModelo);
    this.anoFabricacao = anoFabricacao;
    
}

function peugeot(modelo, fabricante, anoModelo, anoFabricacao, cor) {
    fox.call(this, modelo, fabricante, anoModelo);
    this.anoFabricacao = anoFabricacao
    this.cor = cor;
}
/*const carroDoPrimo = {
    modelo:'Fox',
    fabricante:'Ford',
    anoModelo:2010,
    anoFabricacao:2014,
    cor: 'preto',
}

const carroNovo = {
    modelo:'BYD mini Dolphin',
    fabricante:'BYD',
    anoModelo:2020,
    anoFabricacao:2024,
    cor: 'preto',
    
}
const carroDoRodolfo  = {
    modelo:'Peugeot 206',
    fabricante:'Peugeot',
    anoModelo:2021,
    anoFabricacao:2023,
    cor: 'Cinza',
}*/
const carroDoPrimo = new fox ("Fox", "Ford", 2010, 2014, "Preto");
const carroNovo = new bYd ("BYD mini Dolphin", "BYD", 2020, 2024, "Preto");
const carroDoRodolfo = new peugeot("Peugeot 206", "Peugeot", 2021, 2023, "Cinza");

console.log(carroDoPrimo);
console.log(carroNovo);
console.log(carroDoRodolfo);