// Exercício 1: função maiuscula
function maiuscula(texto: string): string {
  return texto.toUpperCase();
}
const maiusculaArrow = (texto: string): string => texto.toUpperCase();
console.log(maiuscula("hello world"));
console.log(maiusculaArrow("hello world"));

// Exercício 2: função elevar
const elevar = (base: number, expoente: number): number => base ** expoente;
console.log(elevar(2, 10));

// Exercício 3: dobrarNumeros
const dobrarNumeros = (nums: number[]): number[] => nums.map(n => n * 2);
console.log(dobrarNumeros([1, 2, 3, 4, 5]));

// Exercício 4: filtrar por cargo
type Funcionario = { nome: string; cargo: string };
const funcionarios: Funcionario[] = [
  { nome: "Marcos", cargo: "Desenvolvedor" },
  { nome: "Fernanda", cargo: "Gerente" },
  { nome: "Carlos", cargo: "Desenvolvedor" },
  { nome: "Joana", cargo: "Analista" }
];
const cargoDesejado: string = "Desenvolvedor";
const filtrarPorCargo = (lista: Funcionario[], cargo: string): Funcionario[] =>
  lista.filter(f => f.cargo === cargo);
console.log(filtrarPorCargo(funcionarios, cargoDesejado));

// Exercício 5: alunos aprovados
type Aluno = { nome: string; nota: number };
const alunos: Aluno[] = [
  { nome: "Alice", nota: 8 },
  { nome: "Bruno", nota: 5 },
  { nome: "Carla", nota: 7 },
  { nome: "Daniel", nota: 6 }
];
const aprovados = (lista: Aluno[]): Aluno[] => lista.filter(a => a.nota >= 7);
console.log(aprovados(alunos));

// Exercício 6: eventos por mês
type Evento = { nome: string; mes: string };
const eventos: Evento[] = [
  { nome: "Workshop TypeScript", mes: "Janeiro" },
  { nome: "Hackathon", mes: "Março" },
  { nome: "Conferência de IA", mes: "Janeiro" }
];
const mesDesejado: string = "Janeiro";
const filtrarPorMes = (lista: Evento[], mes: string): Evento[] =>
  lista.filter(e => e.mes === mes);
console.log(filtrarPorMes(eventos, mesDesejado));