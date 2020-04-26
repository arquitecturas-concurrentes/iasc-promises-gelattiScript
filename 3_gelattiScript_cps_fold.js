const gustos = () => Array.from(document.querySelectorAll('div.input-radio > app-product-topping-item'));
const encontrarGusto = (nombre) => gustos().find(unGusto => unGusto.innerText === nombre);

const seleccionarCuartoDeHelado = () => document.querySelector('#product-986649').click();
const elegirGusto = (gusto) => encontrarGusto(gusto).querySelector('span').click();
const confirmarGusto = () => document.querySelector('#button-product-add-by-store').click();

const secuenciarConDelay = (accion1, accion2, delay = 1000) => {
    accion1();
    setTimeout(accion2, delay);
};

const pipeline = (acciones) => {
    const accionesSecuenciadas = acciones.reduceRight((accionN, accionNMenosUno) => {
        return () => secuenciarConDelay(accionNMenosUno, accionN);
    });
    accionesSecuenciadas();
};

pipeline([
    () => seleccionarCuartoDeHelado(),
    () => elegirGusto('Limón con Jengibre'),
    () => elegirGusto('Chocolate Rapanuino'),
    () => confirmarGusto(),
    () => seleccionarCuartoDeHelado(),
    () => elegirGusto('DDL Triple Tentación'),
    () => elegirGusto('Frambuesa Nevada'),
    () => confirmarGusto()
]);