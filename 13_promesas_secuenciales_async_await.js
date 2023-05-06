const fetchJSON = (request) => fetch(request).then(response => response.json());

const imprimirPokemonOrdenadosSec = async () => {
    const pokemons = []
    for (let numPokedex = 1; numPokedex < 150; numPokedex++) {
        const pokemon = await fetchJSON('https://pokeapi.co/api/v2/pokemon/' + numPokedex);
        pokemons.push(pokemon);
    }
    const pokemonsOrdenados = pokemons.map(personaje => personaje.name).sort();
    pokemonsOrdenados.forEach(nombre => console.log(nombre))
};

imprimirPokemonOrdenadosSec();