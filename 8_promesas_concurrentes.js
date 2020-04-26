const fetchJSON = (request) => fetch(request).then(response => response.json());

const unoA150 = Array.from({length: 150}, (x, i) => i+1);

let promesasDePokemons =
    unoA150.map(n => fetchJSON('https://pokeapi.co/api/v2/pokemon/' + n));

Promise.all(promesasDePokemons)
    .then(personajes => personajes.map(personaje => personaje.name).sort())
    .then(nombres => nombres.forEach(nombre => console.log(nombre)));