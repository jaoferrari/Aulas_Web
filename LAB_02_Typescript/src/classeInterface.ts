// Interface
interface Animal {
  nome: string;
  som: string;
  emitirSom(): void;
}

// Classe implementando a interface
class Cachorro implements Animal {
  nome: string;
  som: string;

  constructor(nome: string) {
    this.nome = nome;
    this.som = "Au Au!";
  }

  emitirSom(): void {
    console.log(`${this.nome} faz: ${this.som}`);
  }
}

class Gato implements Animal {
  nome: string;
  som: string;

  constructor(nome: string) {
    this.nome = nome;
    this.som = "Miau!";
  }

  emitirSom(): void {
    console.log(`${this.nome} faz: ${this.som}`);
  }
}

const dog = new Cachorro("Rex");
const cat = new Gato("Whiskers");

dog.emitirSom();
cat.emitirSom();