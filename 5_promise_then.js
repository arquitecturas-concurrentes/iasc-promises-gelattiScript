// Promesa que se resuelve después de unos segundos
let promesaConTimeout4 = new Promise((resolve) =>
    setTimeout(() => resolve("Vengo del pasado"), 10_000)
);

const promesa2 = promesaConTimeout4.then(resultado => console.log(resultado));