const gustos = () => Array.from(document.querySelectorAll('div.input-radio > app-product-topping-item'));
const encontrarGusto = (nombre) => gustos().find(unGusto => unGusto.innerText === nombre);

const seleccionarCuartoDeHelado = () => document.querySelector('#product-986649').click();
const elegirGusto = (gusto) => encontrarGusto(gusto).querySelector('span').click();
const confirmarGusto = () => document.querySelector('#button-product-add-by-store').click();

const accionConDelay = (accion1, delay = 1000) => {
    return new Promise((resolve) => {
        accion1();
        setTimeout(() => resolve(), delay);
    });
};

accionConDelay(() => seleccionarCuartoDeHelado())
    .then(() => accionConDelay(() => elegirGusto('Limón con Jengibre')))
    .then(() => accionConDelay(() => elegirGusto('Chocolate Rapanuino')))
    .then(() => accionConDelay(() => confirmarGusto()))
    .then(() => accionConDelay(() => seleccionarCuartoDeHelado()))
    .then(() => accionConDelay(() => elegirGusto('DDL Triple Tentación')))
    .then(() => accionConDelay(() => elegirGusto('Frambuesa Nevada')))
    .then(() => accionConDelay(() => confirmarGusto()));