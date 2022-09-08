const saborSelector = '[data-qa="topping-item"]';
const gustos = () => Array.from(document.querySelectorAll(saborSelector));
const encontrarGusto = (nombre) => gustos().find(unGusto => unGusto.innerText.includes(nombre));

const cuartoDeHeldoSelector = '[data-qa="product-item-187674_986649"]';
const seleccionarCuartoDeHelado = () => ({
    accion: () => document.querySelectorAll(cuartoDeHeldoSelector)[1].click(),
    condicionFin: () => !!document.querySelector(saborSelector)
});
const elegirGusto = (gusto) => ({
    accion: () => {
        const gustoBuscado = encontrarGusto(gusto);
        if(!gustoBuscado) {
            throw new Error(`No encontré el gusto '${gusto}'`);
        }
        gustoBuscado.getElementsByTagName("svg")[0].dispatchEvent(new CustomEvent('click', {bubbles: true}));
    },
    condicionFin: () => !!(encontrarGusto(gusto).getElementsByTagName('svg').length == 1)
});
const confirmarGusto = () => ({
    accion: () => document.querySelector('[data-qa="secondary-button"]').dispatchEvent(new CustomEvent('click', {bubbles: true})),
    condicionFin: () => !!document.querySelector(cuartoDeHeldoSelector)
});

const wait = (condicion) => {
    const retry = (condicion, resolve, intentos) => {
        if (intentos <= 0) {
            throw 'Timeout'
        }
        if (condicion()) {
            resolve()
        } else {
            setTimeout(() => retry(condicion, resolve, intentos - 1), 100)
        }
    };
    return new Promise(resolve => retry(condicion, resolve, 50))
};

const pipeline = (commands) => commands.reduce((acum, command) => acum.then(() => {
    command.accion();
    return wait(command.condicionFin)
}), Promise.resolve());

pipeline([
    seleccionarCuartoDeHelado(),
    elegirGusto('DDL de Cabra'),
    confirmarGusto(),
]);