const gustos = () => Array.from(document.querySelectorAll('div.input-radio > app-product-topping-item'));
const encontrarGusto = (nombre) => gustos().find(unGusto => unGusto.innerText === nombre);

const seleccionarCuartoDeHelado = () => ({
    accion: () => document.querySelector('#product-986649').click(),
    condicionFin: () => !!document.querySelector('div.input-radio > app-product-topping-item')
});
const elegirGusto = (gusto) => ({
    accion: () => encontrarGusto(gusto).querySelector('span').click(),
    condicionFin: () => !!encontrarGusto(gusto).querySelector('.active')
});
const confirmarGusto = () => ({
    accion: () => document.querySelector('#button-product-add-by-store').click(),
    condicionFin: () => !document.querySelector('div.input-radio > app-product-topping-item')
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
    elegirGusto('Limón con Jengibre'),
    elegirGusto('Chocolate Rapanuino'),
    confirmarGusto(),

    seleccionarCuartoDeHelado(),
    elegirGusto('DDL Triple Tentación'),
    elegirGusto('Frambuesa Nevada'),
    confirmarGusto(),
]);