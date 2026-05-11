// Exercício 1: Transformação com map()
type ProdutoUSD = { nome: string; precoUSD: number };
type ProdutoBRL = { nome: string; precoBRL: number };

const produtosUSD: ProdutoUSD[] = [
  { nome: "Notebook", precoUSD: 800 },
  { nome: "Mouse", precoUSD: 20 },
  { nome: "Teclado", precoUSD: 50 }
];

const produtosReal: ProdutoBRL[] = produtosUSD.map(p => ({
  nome: p.nome,
  precoBRL: p.precoUSD * 5
}));
console.log("Produtos em BRL:", produtosReal);

// Exercício 2: forEach com log
const usuarios: string[] = ['ana', 'marcos', 'julia'];
usuarios.forEach(nome => {
  const nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1);
  console.log(`Usuário ${nomeFormatado} conectado com sucesso!`);
});

// Exercício 3: sort() natural sem modificar original
const versoes: string[] = ['1.10.0', '1.2.1', '1.0.5', '1.20.0'];
const versoesOrdenadas = [...versoes].sort((a, b) =>
  a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
);
console.log("Original:", versoes);
console.log("Ordenado:", versoesOrdenadas);

// Exercício 4: Desafio Final (map + sort + forEach)
type Estudante = { nome: string; nota: number; bolsista: boolean };
const estudantes: Estudante[] = [
  { nome: 'Ricardo', nota: 8.5, bolsista: false },
  { nome: 'Beatriz', nota: 9.2, bolsista: true },
  { nome: 'Tiago', nota: 7.0, bolsista: false },
  { nome: 'Maria', nota: 9.8, bolsista: true }
];

estudantes
  .map(e => ({ ...e, nota: e.nota + 0.5 }))
  .sort((a, b) => b.nota - a.nota)
  .forEach(e => {
    if (e.bolsista) {
      console.log(`${e.nome}: ${e.nota}`);
    }
  });