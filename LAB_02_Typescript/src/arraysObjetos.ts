// Array
let numeros: number[] = [1, 2, 3, 4, 5];
console.log("Array:", numeros);
console.log("Primeiro:", numeros[0]);
numeros.push(6);
console.log("Após push:", numeros);

// Objeto
let pessoa = {
  nome: "João",
  idade: 25,
  cidade: "Boituva"
};
console.log("Nome:", pessoa.nome);
console.log("Cidade:", pessoa.cidade);

// Array de objetos
let alunos = [
  { nome: "Ana", nota: 9 },
  { nome: "Pedro", nota: 7 },
  { nome: "Maria", nota: 8 }
];
alunos.forEach(aluno => {
  console.log(`${aluno.nome}: ${aluno.nota}`);
});