const gustos = () => Array.from(document.querySelectorAll('div.input-radio > app-product-topping-item'));
const encontrarGusto = (nombre) => gustos().find(unGusto => unGusto.innerText === nombre);

const seleccionarCuartoDeHelado = () => document.querySelector('#product-986649').click();
const elegirGusto = (gusto) => encontrarGusto(gusto).querySelector('span').click();
const confirmarGusto = () => document.querySelector('#button-product-add-by-store').click();

const accionConDelay = (accion, delay = 1000) => {
    return new Promise((resolve) => {
        accion();
        setTimeout(() => resolve(), delay);
    });
};

const pipeline = (acciones) => {
    acciones.reduce(
        (accionAccum, accionSiguiente) => accionAccum.then(() => accionConDelay(accionSiguiente)),
        Promise.resolve()
    );
};

pipeline([
    () => seleccionarCuartoDeHelado(),
    () => elegirGusto('Limón con Jengibre'),
    () => elegirGusto('Chocolate Rapanuino'),
    () => confirmarGusto(),
    () => seleccionarCuartoDeHelado(),
    () => elegirGusto('DDL Triple Tentación'),
    () => elegirGusto('Frambuesa Nevada'),
    () => confirmarGusto(),
]);