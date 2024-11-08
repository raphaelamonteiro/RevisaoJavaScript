let nome = "Rafaela";
nome = "Raphaela"; // Pode ser alterado
console.log(nome); // Raphaela

const idade = 18;
// idade = 20; // Erro: uma constante não pode ser reatribuída

var cidade = "Caçapava";
cidade = "São José dos Campos"; // Pode ser alterada
console.log(cidade); // São José dos Campos

//Escopo de Variáveis
//Escopo de Bloco (let e const): a variável só é acessível dentro do bloco em que foi definida. 
if (true) {
    let mensagem = "Hello World!";
    console.log(mensagem); // Funciona
  }
  console.log(mensagem); // Erro: "mensagem" não está definida fora do bloco


//Escopo de Função (var): uma variável declarada com var dentro de uma função existe apenas dentro dessa função.
function saudacao() {
    var saudacao = "Oi!";
    console.log(saudacao); // Funciona
  }
  console.log(saudacao); // Erro: "saudacao" não está definida fora da função


//Hoisting: significa que a declaração é "movida" para o topo, mas a atribuição de valor não é.

  console.log(name); // undefined (foi "elevada", mas sem valor ainda)
  var name = "Raul";
  console.log(name); // Raul

  

  
