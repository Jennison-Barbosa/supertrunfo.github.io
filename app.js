var carta1 = {
  nome: 'Bulbasauro',
  imagem: "https://static.wikia.nocookie.net/pokedex-br/images/a/a2/Bulbasauro_Pose.png/revision/latest?cb=20151224122219&path-prefix=pt-br",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6
  }
}

var carta2 = {
  nome: 'Pikachu',
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
  atributos: {
    ataque: 10,
    defesa: 8,
    magia: 5
  }
}

var carta3 = {
  nome: 'Charmander',
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  atributos: {
    ataque: 6,
    defesa: 9,
    magia: 7
  }
}

var cartas = [carta1, carta2, carta3]
var cartaMaquina
var cartaJogador

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3)
  cartaMaquina = cartas[numeroCartaMaquina]

  var numeroCartaJogador = parseInt(Math.random() * 3)
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() *3)
  }
  cartaJogador = cartas[numeroCartaJogador]

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirOpcoes();

  exibirCartaJogador();
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes")
  var opcoesTexto = ""

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo; 
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "Você VENCEU!Parabéns!"
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML = "Você PERDEU!A carta da máquina é maior."    
  } else {
    elementoResultado.innerHTML = "Empatou!"
  }
}
function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador")
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
  //divCartaJogador.style.backgroundImage = `url(cartaJogador.imagem)`
}