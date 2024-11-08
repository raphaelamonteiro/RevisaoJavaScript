//Função Tradicional
//A declaração mais comum é usando function. 
//Essa forma permite "elevar" a função para o topo do escopo (assim como ocorre com var).
function saudacao() {
    console.log("Hello World!");
  }
  saudacao(); 

//Funções Anônimas
//São funções sem nome, geralmente usadas como parâmetros de outras funções ou atribuídas a variáveis.
const apresentacao = function(){
    console.log("Olá, eu sou a Raphaela!");
};
  apresentacao(); 

//Arrow Functions
//Introduzidas no ES6, as arrow functions são uma maneira mais curta de escrever funções e têm um comportamento especial com o this. 
const despedida = () => {
    console.log("Até logo");
};
despedida();

// Se a função tem apenas uma expressão, você pode omitir o { } e o return:

const soma = (a,b) => a + b;
console.log(soma(5, 8));


//definindo valores padrão para parâmetros da função
function recepcao(nome = "Visitante"){
    return `Bem-vindo(a), ${nome}!`;
}
console.log(recepcao()); //Bem-vindo(a), Visitante!
console.log(recepcao("Amy")); //Bem-vindo(a), Amy!

//Funções podem ser atribuídas a variáeis, passadas como argumentos e retornadas de outras funções

//Funções como Argumentos (Callbacks) - função que é passada como argumento para outra função

function processar(name, callback){
    console.log("Processando...");
    callback(name);
}

processar("Rachel", (name) => {
    console.log(`Processando: ${nome}`);
});

// Processando...
// Processado: Raphaela

//Funções que retornam funções

function apresentacao(apresenta){
    return function(name) {
        return `${apresenta}, ${nome}!`;
    }; 
    }

    const apresentacaoAmigavel = apresentacao("Prazer")
    console.log(apresentacaoAmigavel("Raphaela"));


//Funções assíncronas permitem lidar com operações que levam tempo (como chamadas de API) sem bloquear o código. 
//Para isso, usamos async e await.

async function buscaDados() {
    try {
      const resposta = await fetch("https://api.exemplo.com/dados");
      const dados = await resposta.json();
      console.log(dados);
    } catch (erro) {
      console.error("Erro ao buscar dados:", erro);
    }
  }
  buscaDados();
  



