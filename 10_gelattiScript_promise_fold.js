const saborSelector = `[data-qa="topping-item"]`;
const gustos = () => Array.from(document.querySelectorAll(saborSelector));
const encontrarGusto = (nombre) => gustos().find(unGusto => unGusto.innerText.includes(nombre));

const seleccionarCuartoDeHelado = () => document.querySelectorAll('[data-qa="product-item-187674_986649"]')[1].click();

const elegirGusto = (gusto) => {
    const gustoBuscado = encontrarGusto(gusto);
    if(!gustoBuscado) {
        throw new Error(`No encontré el gusto '${gusto}'`);
    }
    gustoBuscado.getElementsByTagName("svg")[0].dispatchEvent(new CustomEvent('click', {bubbles: true}));
};
const confirmarGusto = () => Array.from(document.querySelectorAll('button'))
    .find(el => Array.from(el.childNodes).some(child => child.textContent === 'Agregar y seguir comprando'))
    .click();

//-----------------------------------------

const accionConDelay = (accion, delay = 3000) => {
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
    () => elegirGusto('DDL de Cabra'),
    () => elegirGusto('Chocolate Cacao 80%'),
    () => confirmarGusto(),
    () => seleccionarCuartoDeHelado(),
    () => elegirGusto('Sambayón'),
    () => elegirGusto('Dulce de Leche Clásico'),
    () => confirmarGusto(),
]);