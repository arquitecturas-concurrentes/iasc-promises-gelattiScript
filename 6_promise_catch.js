const promesaConRespuesta = fetch('https://pokeapi.co/api/v2/pokemon/25');

promesaConRespuesta
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then((pokemon) => {
        console.log(pokemon.name);
    })
    .catch((error) => {
        console.error(`No se pudo obtener el Pokémon: ${error}`);
    });
