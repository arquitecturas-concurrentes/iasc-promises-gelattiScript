// Creamos una Promesa que se resuelve inmediatamente con un valor
new Promise(resolve => resolve(15));

// Otra forma de crear una promesa ya resuelta
Promise.resolve(15);

// Promesa que sólo hace una acción. Nunca se resuelve (queda en estado `pendiente`)
let promesaSinResolver = new Promise((resolve) => {
    console.log('¡Hola!');
});

// Promesa que se resuelve después de unos segundos
let promesaConTimeout = new Promise((resolve) => {
    setTimeout(() => resolve("Vengo del pasado"), 1_000);
});

console.log(promesaConTimeout);