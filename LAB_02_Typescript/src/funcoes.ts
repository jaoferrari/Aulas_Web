// Função simples
function somar(a: number, b: number): number {
  return a + b;
}

// Função com parâmetro opcional
function saudacao(nome: string, titulo?: string): string {
  return titulo ? `Olá, ${titulo} ${nome}!` : `Olá, ${nome}!`;
}

// Arrow function
const multiplicar = (a: number, b: number): number => a * b;

console.log("Soma:", somar(10, 5));
console.log(saudacao("João"));
console.log(saudacao("João", "Prof."));
console.log("Multiplicação:", multiplicar(4, 3));