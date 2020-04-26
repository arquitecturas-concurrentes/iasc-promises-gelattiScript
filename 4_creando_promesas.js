// Promesa que solo hace una acción. Nunca se resuelve
let promesaSinResolver = new Promise(() => console.log('¡Hola!'));

// Promesa que se resuelve inmediatamente
new Promise(resolve => resolve(15));

Promise.resolve(15);

// Promesa que se resuelve después de unos segundos
let promesaConTimeout = new Promise((resolve) =>
    setTimeout(() => resolve("Vengo del pasado"), 10_000)
);

console.log(promesaConTimeout);