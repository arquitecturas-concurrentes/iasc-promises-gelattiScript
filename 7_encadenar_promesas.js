let primerPokemon = fetch('https://pokeapi.co/api/v2/pokemon/1');

primerPokemon.then(pokemon => console.log(`Encontre a : ${pokemon.name}`));

primerPokemon.then(response => {
    response.json().then(pokemon => {
        console.log(`Encontre a: ${pokemon.name}`)
    })
});

const fetchJSON = (request) => fetch(request).then(response => response.json());

fetchJSON('https://pokeapi.co/api/v2/pokemon/1')
    .then(pokemon => console.log(`Encontre a: ${pokemon.name}`));