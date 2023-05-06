const rango = (startAt, size) => Array.from({length: size}, (x, i) => i + startAt);
const fetchJSON = (request) => fetch(request).then(response => response.json());

const imprimirPokemonOrdenados = async () => {
    const unoA150 = rango(1, 150);
    const promesasDePokemons =
        unoA150.map(n => fetchJSON('https://pokeapi.co/api/v2/pokemon/' + n));
    const pokemons = await Promise.all(promesasDePokemons);
    const pokemonsOrdenados = pokemons.map(personaje => personaje.name).sort();
    pokemonsOrdenados.forEach(nombre => console.log(nombre))
};

imprimirPokemonOrdenados();