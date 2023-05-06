promesaConTimeout = new Promise((resolve) => {
    setTimeout(() => resolve("Vengo del pasado"), 10_000);
});

// Podemos secuenciar las promesas usando `then` consecutivos, ya que `then` devuelve una nueva promesa
promesaConTimeout
    .then(mensaje => '¡' + mensaje + '!')
    .then((numero) => console.log(numero));
// El `then` se puede pensar como un `map` de listas, ya que recibe una función para aplicarle al valor de la Promise,
// y devuelve una nueva Promise

// Veamos un ejemplo de un request HTTP, que me devuelve una Promise con la respuesta
let respuestaHTTP = fetch('https://pokeapi.co/api/v2/pokemon/1');

respuestaHTTP.then(response => console.log(response.status));

// Podemos enviar dos `then`s a una misma Promise. Éstos se van a ejecutar concurrentemente, no en serie
// (como pasaba en el ejemplo anterior)
// Nota: `json()` me devuelve una nueva Promise, que se va a resolver con el body de la respuesta parseado como JSON
respuestaHTTP
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