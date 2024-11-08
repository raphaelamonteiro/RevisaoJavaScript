class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;   // Atributo da classe
      this.idade = idade; // Atributo da classe
    }
    
    saudacao() {          // Método da classe
      return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
    }
  }
  
  const pessoa1 = new Pessoa("Raphaela", 18);
  console.log(pessoa1.saudacao()); // Saída: Olá, meu nome é Raphaela e eu tenho 18 anos.

  //constructor: é um método especial chamado automaticamente quando a classe é instanciada com new. Ele inicializa os atributos do objeto.

  //Métodos: são funções definidas na classe. Qualquer instância dessa classe pode acessar esses métodos.

  