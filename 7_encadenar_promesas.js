// TODO Agregar un ejemplo de encadenamiento más simple, `json()` es medio heavy
// Por ejemplo:

Promise(15)
    .then(numero => numero + 1)
    .then((numero) => console.log(numero));

// TODO Agregar ejemplo de encadenamiento donde se hacen dos `then`s de una misma Promise (serializar vs concurrencia)
// Por ejemplo:

const respuestaHTTP = fetch('https://pokeapi.co/api/v2/pokemon/1');

respuestaHTTP.then(response => console.log(response.status));

respuestaHTTP
    .then(response => {
        response.json().then(pokemon => {
            console.log(`Encontre a: ${pokemon.name}`)
        })
    });

// Hablar del comportamiento de `then` (map + flatMap)
fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then(response => response.json())
    .then(pokemon => console.log(`Encontre a: ${pokemon.name}`));