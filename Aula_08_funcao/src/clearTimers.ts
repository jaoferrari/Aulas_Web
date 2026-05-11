// clearTimeout
let frase = "Rodando o setTimeout"

let timeout = setTimeout(() => console.log("Rodando o setTimeout"), 2000);

frase = "Rodando o clearTimeout";

if (frase !== "Rodando o setTimeout") {
  clearTimeout(timeout);
  console.log(frase);
}

// clearInterval — para após 3 execuções
let contador = 0;

let interval = setInterval(() => {
  contador++;
  console.log("Rodando o setInterval");
  if (contador === 3) {
    console.log("Intervalo cancelado apos 3 execucoes.");
    clearInterval(interval);
  }
}, 500);