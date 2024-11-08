//1. Métodos para Iteração
//.forEach()
//Executa uma função para cada elemento do array. 
//Não retorna um novo array, então é ideal para executar operações sem modificar o array original.
const numeros = [1, 2, 3, 4, 5];
numeros.forEach((numero) => console.log(numero));
//saída: 1 2 3 4

//.map()
// Cria um novo array com os resultados da função aplicada a cada elemento.
const num = [1, 2, 3, 4];
const dobro = n.map((num) => num * 2);
console.log(dobro);
//saída: [2, 4, 6, 8]


//.filter()
//Cria um novo array apenas com os elementos que satisfazem uma condição.
const n = [1, 2, 3, 4, 5];
const pares = n.filter((n) => n % 2 ==0);
console.log(pares);
//saída: [2, 4]


//.reduce()
//Reduz o array a um único valor, acumulando os resultados de cada iteração.
const nums = [1, 2, 3, 4];
const sum = nums.reduce((total, nums) => total + nums, 0);
console.log(sum);


//.find()
//Retorna o primeiro elemento que satisfaz uma condição.
const frutas = ["maçã", "kiwi", "uva"];
const fruta = frutas.find((fruta) => fruta === "kiwi");
console.log(fruta); // Saída: "kiwi"


//.some() e .every()
//.some retorna true se ao menos um elemento atende à condição
//.every retorna true se todos os elementos atendem À condição
const listanum = [1, 2, 3, 4];
console.log(listanum.some((lnum) => lnum % 2 === 0)); //true
console.log(listanum.every((lnum) => lnum > 0)); //true



