// Criando um objeto pessoa
const pessoa = {
    nome: 'Alice',
    idade: 21,
    saudacao: function(){
        console.log(`Olá, meu nome é ${this.nome}`);
    }
};

// Criando outro objeto a partir de pessoa
const outraPessoa = Object.create(pessoa);
outraPessoa.nome = 'Bob';

// Acessando propriedades e metódos
console.log(outraPessoa.nome);
outraPessoa.saudacao();
