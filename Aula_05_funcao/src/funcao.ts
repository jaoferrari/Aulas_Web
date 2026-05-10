// Funções Nomeadas
function mensagem(f: string): string {
  return f;
}

function soma(a: number, b: number): void {
  console.log(a + b);
}

function saudacao(nome: string = "Visitante"): string {
  return `Olá, ${nome}!`;
}

function multiplicar(a: number, b: number): number {
  return a * b;
}

// Arrow Functions
const mensagemLambda = (f: string): string => f;
const exibirSoma = (a: number, b: number): void => console.log(a + b);
const saudar = (nome: string = "Visitante"): string => `Olá, ${nome}!`;
const multiplicarLambda = (a: number, b: number): number => a * b;

// Parâmetro opcional com if
const multiplicarOpcional = (a: number, b?: number): number => {
  if (b === undefined) return a;
  return a * b;
};

// Operador ternário
const multiplicarOpcionalTernario = (a: number, b?: number): number =>
  b === undefined ? a : a * b;

// Coalescência nula
const multiplicarCoalescencia = (a: number, b?: number): number => a * (b ?? 1);

console.log(mensagem("Olá TypeScript!"));
soma(3, 4);
console.log(saudacao());
console.log(saudacao("João"));
console.log(multiplicarCoalescencia(10));
console.log(multiplicarCoalescencia(10, 0));