// For clássico
for (let i = 0; i < 5; i++) {
  console.log("For:", i);
}

// While
let contador: number = 0;
while (contador < 3) {
  console.log("While:", contador);
  contador++;
}

// For...of (percorre arrays)
let nomes: string[] = ["Ana", "João", "Maria"];
for (let nome of nomes) {
  console.log("Nome:", nome);
}