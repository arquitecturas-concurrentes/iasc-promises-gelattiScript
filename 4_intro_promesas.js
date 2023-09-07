// Veamos un ejemplo de un request HTTP, que me devuelve una Promise con la respuesta
const promesaConRespuesta = fetch('https://pokeapi.co/api/v2/pokemon/25');
console.log(promesaConRespuesta);
console.log("Enviamos el request!");

// El `then` se puede pensar como un `map` de listas, ya que recibe una función para aplicarle al valor de la Promise,
// y devuelve una nueva Promise
promesaConRespuesta.then(respuesta => respuesta.status);

promesaConRespuesta.then(respuesta => respuesta.status).then(status => console.log(status));
promesaConRespuesta.then(respuesta => console.log(respuesta.status));

// ------------------------------------------------------------------------------

// `json()` me devuelve una nueva Promise, que se va a resolver con el body de la respuesta parseado como JSON
promesaConRespuesta
    .then(response => {
        response.json().then(pokemon => {
            console.log(`Encontre a: ${pokemon.name}`)
        })
    });
// El problema con esto es que, si encadeno otro `then` en esta línea, no se va a ejecutar después de haber parseado el JSON

// `then` también se comporta como un `flatMap`, si la función que le pasamos devuelve una Promise. Esto nos permite
// secuenciar varias operaciones asincrónicas fácilmente
fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then(response => response.json())
    .then(pokemon => console.log(`Encontre a: ${pokemon.name}`));