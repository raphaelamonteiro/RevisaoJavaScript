//1. Acessando e Modificando Propriedades

//Acessando propriedades
//notação de ponto: obj.propriedade
//notação de colchetes: obj["propriedade"] (útil para nomes de propriedades dinâmicos)
const pessoa = {nome: "Olívia", idade: 22};
console.log(pessoa.nome) //Olívia
console.log(pessoa["idade"]); //22

//Uma propriedade em um objeto é uma combinação de um nome (ou chave) e um valor. Esse valor pode ser qualquer tipo de dado: números, strings, booleanos, arrays, outros objetos, ou até funções (nesse caso, chamadas de métodos).
const garota = {
    nome: "Alice",      // "nome" é a chave e "Alice" é o valor
    idade: 25,        // "idade" é a chave e 25 é o valor
    saudacao: function() { // "saudacao" é a chave, e a função é o valor (método)
      return "Olá!";
    }
  };

 //Adicionando e Modificando Propriedades
 pessoa.sobrenome = "Carvalho"; // Adiciona nova propriedade
 pessoa.idade = 24; // Modifica uma existente
 console.log(pessoa); // { nome: "Olívia", idade: 24, sobrenome: "Carvalho" }
 
 //2. Destructuring
//O destructuring permite extrair valores de um objeto ou array de forma rápida.

const {nome, idade} = pessoa;
console.log(nome); // Olívia
console.log(idade); //24

//Destructuring com Arrays
const numeros = [10, 20, 30];
const [primeiro, segundo] = numeros;
console.log(primeiro); //10
console.log(segundo); //20

//3. Spread e Rest
//Spread (...) para Arrays
//Permite "espalhar" os elementos de um array em um novo contexto. É útil para clonar ou combinar arrays.
const nums = [1, 2, 3];
const novosNums = [...nums, 4, 5];
console.log(novosNums); //[1, 2, 3, 4, 5]


//Spread (...) para Objetos
//Pode ser usado para combinar ou clonar objetos.
const person = {nome: "Bob", idade: 43};
const newPerson = {...person, sobrenome: "Ross"};
console.log(newPerson);

//Rest (...) para Funções
//Agrupa argumentos em um array.
function soma(...numeros){
    return numeros.reduce((total, numero) => total + numero, 0)
}
console.log(soma(1, 2, 3));




