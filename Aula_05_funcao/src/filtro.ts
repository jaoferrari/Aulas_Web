// Removendo duplicados
const numeros = [1, 2, 3, 2, 4, 1, 5];
const semDuplicados = numeros.filter((valor, indice, self) =>
  self.indexOf(valor) === indice
);
console.log("Sem duplicados:", semDuplicados);

// Filtrando pares
const pares = [1, 2, 3, 4, 5, 6, 7, 8].filter(n => n % 2 === 0);
console.log("Pares:", pares);

// Maiores que 30
const maioresQue30 = [10, 25, 30, 45, 50].filter(n => n > 30);
console.log("Maiores que 30:", maioresQue30);

// Palavras longas
const palavras = ["sol", "chuva", "trovão", "tempestade", "vento"];
const longas = palavras.filter(p => p.length > 5);
console.log("Palavras longas:", longas);

// Filtrando por propriedade
type Pessoa = { nome: string; idade: number };
const pessoas: Pessoa[] = [
  { nome: "Ana", idade: 30 },
  { nome: "João", idade: 20 },
  { nome: "Maria", idade: 25 },
  { nome: "Carlos", idade: 18 }
];
const maioresDeIdade = pessoas.filter(p => p.idade >= 18);
console.log("Maiores de idade:", maioresDeIdade);

// Nomes que começam com A
const nomes = ["Ana", "João", "Maria", "Carlos", "Amanda"];
const comA = nomes.filter(nome => nome.startsWith("A"));
console.log("Começa com A:", comA);

// Removendo null/undefined
const valores = [10, null, 25, undefined, 40, null];
const filtrados = valores.filter(v => v !== null && v !== undefined);
console.log("Sem nulos:", filtrados);

// Palavras com substring
const linguagens = ["javascript", "typescript", "java", "python", "csharp"];
const comJava = linguagens.filter(p => p.includes("java"));
console.log("Contém 'java':", comJava);