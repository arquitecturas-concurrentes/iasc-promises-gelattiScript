const fetchJSON = (request) => fetch(request).then(response => response.json());

const unoA150 = Array.from({length: 150}, (x, i) => i+1);

// Podemos disparar varios requests concurrentes, y después combinar todos los resultados en una lista
let promesasDePokemons =
    unoA150.map(n => fetchJSON('https://pokeapi.co/api/v2/pokemon/' + n));
Promise.all(promesasDePokemons)
    .then(personajes => personajes.map(personaje => personaje.name).sort())
    .then(nombres => nombres.forEach(nombre => console.log(nombre)));
// Con `Promise.all` pasamos de [Promise<Pokemon>] a Promise<Pokemon[]>

// `Promise.all` no es la única forma que tenemos de combinar promesas. En la práctica de la clase que viene vamos a ver
// otras, aunque si tienen curiosidad, pueden buscar `Promise.race()`, `Promise.any()` y `Promise.allSettled()`