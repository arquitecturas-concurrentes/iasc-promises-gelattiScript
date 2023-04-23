const cuartoDeHeladoSelector = '[data-qa="product-item-2111798946"]';
const saborSelector = `[data-qa="topping-item"]`;

const seleccionarCuartoDeHelado = () => document.querySelectorAll(cuartoDeHeladoSelector)[0].click();

const gustos = () => Array.from(document.querySelectorAll(saborSelector));
const encontrarGusto = (nombre) => gustos().find(unGusto => unGusto.innerText.includes(nombre));
const elegirGusto = (gusto) => {
    const gustoBuscado = encontrarGusto(gusto);
    if (!gustoBuscado) {
        throw new Error(`No encontré el gusto '${gusto}'`);
    }
    gustoBuscado.getElementsByTagName("svg")[0].dispatchEvent(new CustomEvent('click', {bubbles: true}));
};

const confirmarGusto = () => Array.from(document.querySelectorAll('button'))
    .find(el => Array.from(el.childNodes).some(child => child.textContent === 'Agregar y seguir comprando'))
    .click();

export { seleccionarCuartoDeHelado, elegirGusto, confirmarGusto }