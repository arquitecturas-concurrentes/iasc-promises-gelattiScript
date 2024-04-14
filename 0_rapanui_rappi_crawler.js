const cuartoDeHeladoSelector = '[data-qa="product-info-2112984158"]';
const saborSelector = `[data-qa="topping-item"]`;
const agregarYSeguirComprandoSelector = `[data-testid="secondary-button"]`;

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

const confirmarGusto = () => document.querySelectorAll(agregarYSeguirComprandoSelector)[0]
    .click();

export { seleccionarCuartoDeHelado, elegirGusto, confirmarGusto }