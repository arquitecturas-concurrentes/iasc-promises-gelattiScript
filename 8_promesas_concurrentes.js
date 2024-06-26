const rango = (startAt, size) => Array.from({length: size}, (x, i) => i + startAt);
const fetchJSON = (request) => fetch(request).then(response => response.json());

const unoA150 = rango(1, 150);

// Podemos disparar varios requests concurrentes, y después combinar todos los resultados en una lista
let promesasDePokemons =
    unoA150.map(n => fetchJSON('https://pokeapi.co/api/v2/pokemon/' + n));
Promise.all(promesasDePokemons)
    .then(pokemones => pokemones.map(pokemon => pokemon.name).sort())
    .then(nombres => nombres.forEach(nombre => console.log(nombre)));
// Con `Promise.all` pasamos de [Promise<Pokemon>] a Promise<[Pokemon]>

// `Promise.all` no es la única forma que tenemos de combinar promesas. En la práctica de la clase que viene vamos a ver
// otras, aunque si tienen curiosidad, pueden buscar `Promise.race()`, `Promise.any()` y `Promise.allSettled()`