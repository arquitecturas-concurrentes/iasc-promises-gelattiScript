//TODO arrancar mostrando una Promise que se obtiene al interactuar con alguna API?
//Usar ejemplo que no te fuerce a encadenar `thens` para obtener la respuesta (fetch no, por ejemplo)

// Promesa que se crea con un valor (se resuelve inmediatamente)
Promise.resolve(15);

// Otra forma de crear esa misma promesa (constructor con callback)
new Promise(resolve => resolve(15));

// Promesa que sólo hace una acción. Nunca se resuelve (queda en estado `pendiente`)
let promesaSinResolver = new Promise((resolve) => {
    console.log('¡Hola!');
});

// Promesa que se resuelve después de unos segundos
let promesaConTimeout = new Promise((resolve) => {
    setTimeout(() => resolve("Vengo del pasado"), 1_000);
});

console.log(promesaConTimeout);