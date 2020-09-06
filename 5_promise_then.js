// Promesa que se resuelve después de unos segundos
let promesaConTimeout = new Promise((resolve) =>
    setTimeout(() => resolve("Vengo del pasado"), 10_000)
);

promesaConTimeout.then(resultado => console.log(resultado));