const fetchJSON = (request) => fetch(request).then(response => response.json());

const unoA150 = Array.from({length: 150}, (x, i) => i+1);

let promesasDePokemons =
    unoA150.map(n => fetchJSON('https://pokeapi.co/api/v2/pokemon/' + n));

const imprimirPokemonOrdenados = async () => {
    const pokemons = await Promise.all(promesasDePokemons);
    const pokemonsOrdenados = pokemons.map(personaje => personaje.name).sort();
    pokemonsOrdenados.forEach(nombre => console.log(nombre))
};

imprimirPokemonOrdenados();