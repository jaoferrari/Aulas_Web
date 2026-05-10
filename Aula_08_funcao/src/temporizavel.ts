console.log("Antes do setTimeout.")

setTimeout(() => console.log("Executando o setTimeout."), 2000);

console.log("Depois do setTimeout.")

setInterval(() => console.log("Executando o setInterval."), 2000);

console.log("Depois do setInterval.")