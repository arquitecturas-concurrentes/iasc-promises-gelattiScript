// https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function/

const numeros = [1, 2, 3, 4, 5];
const pares = numeros.filter(numero => numero % 2 === 0);
console.log({ pares });

const sleep = (delay) => {
    return new Promise(resolve => setTimeout(resolve, delay));
};
const paresAsync = numeros.filter(async numero => {
    await sleep(1000);
    return numero % 2 === 0
});
console.log({ paresAsync });

const asyncFilter = async (lista, predicado) => {
    const resultados = await Promise.all(lista.map(predicado));
    return lista.filter((_elemento, indice) => resultados[indice]);
}
const paresAsync2 = await asyncFilter(
  numeros,
  async numero => {
    await sleep(1000);
    return numero % 2 === 0
  }
);
console.log({ paresAsync2 });