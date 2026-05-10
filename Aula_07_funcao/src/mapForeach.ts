// map()
type Produto = { id: number; nome: string; preco: number };
const produtos: Produto[] = [
  { id: 1, nome: 'Mouse', preco: 50 },
  { id: 2, nome: 'Teclado', preco: 150 }
];
const nomes: string[] = produtos.map(p => p.nome);
console.log("Nomes:", nomes);

const listaFormatada = produtos.map(p => ({
  id: p.id,
  label: `${p.nome} - R$ ${p.preco.toFixed(2)}`,
  disponivel: true
}));
console.log("Formatado:", listaFormatada);

// forEach()
const frutas: string[] = ['Maca', 'Banana', 'Uva'];
frutas.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});

let totalVendas = 0;
const precos: number[] = [10.5, 20.0, 5.25];
precos.forEach(preco => { totalVendas += preco; });
console.log(`Total: ${totalVendas}`);

// sort()
const numeros: number[] = [10, 2, 100, 5];
console.log("Crescente:", [...numeros].sort((a, b) => a - b));
console.log("Decrescente:", [...numeros].sort((a, b) => b - a));

const arquivos: string[] = ["item10.png", "item2.png", "item1.png", "item20.png"];
arquivos.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
console.log("Natural:", arquivos);