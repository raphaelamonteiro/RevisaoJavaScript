function Mamifero(nome) {
    this.nome = nome;
  }
  
  Mamifero.prototype.comer = function() {
    return `${this.nome} está comendo.`;
  };
  
  function Cachorro(nome, raca) {
    Mamifero.call(this, nome); // Chama o "construtor" de Mamifero
    this.raca = raca;
  }
  
  Cachorro.prototype = Object.create(Mamifero.prototype); // Herança
  Cachorro.prototype.constructor = Cachorro; // Corrige o construtor
  
  Cachorro.prototype.latir = function() {
    return `${this.nome} está latindo.`;
  };
  
  const rex = new Cachorro("Rex", "Labrador");
  console.log(rex.comer()); // Saída: Rex está comendo.
  console.log(rex.latir()); // Saída: Rex está latindo.
  