// Exercício 1: Classificação de Idades
const idades: number[] = [10, 15, 20, 8, 17, 25];

for (const idade of idades) {
  if (idade < 12) {
    console.log(`${idade} anos: Criança`);
  } else if (idade < 18) {
    console.log(`${idade} anos: Adolescente`);
  } else {
    console.log(`${idade} anos: Adulto`);
  }
}

// Exercício 2: Manipulação de Lista de Nomes
let nomes: string[] = ["Carlos", "Ana", "Pedro", "Mariana"];
const pos = nomes.indexOf("Pedro");
nomes.splice(pos, 1);
nomes.push("João");
nomes.unshift("Beatriz");
console.log("Lista final:", nomes);
console.log("Total:", nomes.length);

// Exercício 3: Lista Mista com Filtragem
const listaMista: (number | string)[] = [1, "Maçã", 2, "Banana", 3, "Laranja"];
const numeros: number[] = [];
const frutas: string[] = [];

for (const item of listaMista) {
  if (typeof item === "number") {
    numeros.push(item);
  } else {
    frutas.push(item);
  }
}
console.log("Números:", numeros);
console.log("Frutas:", frutas);