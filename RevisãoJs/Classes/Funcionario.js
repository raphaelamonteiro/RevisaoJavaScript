class Funcionario extends Pessoa{
    constructor(nome, idade, cargo){
        super(nome, idade); //chama o constructor da classe "Pai"
        this.cargo = cargo; //Adiciona novo atributo"cargo"
    }


apresentar() {
    return `${this.saudacao()} Eu trabalho como ${this.cargo}.`;
  }
}

const funcionario1 = new Funcionario("Raul", 18, "Desenvolvedor");
console.log(funcionario1.apresentar());
// Saída: Olá, meu nome é Raul e eu tenho 18 anos. Eu trabalho como Desenvolvedor.