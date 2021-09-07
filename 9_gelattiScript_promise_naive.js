const saborSelector = `div[data-testid='tooping']`;
const gustos = () => Array.from(document.querySelectorAll(saborSelector));
const encontrarGusto = (nombre) => gustos().find(unGusto => unGusto.innerText.includes(nombre));

const opcionCuartoDeHelado = Array.from(document.querySelectorAll('div'))
    .find(el => Array.from(el.childNodes).some(child => child.textContent === '1/4 kg de Helado'));
const seleccionarCuartoDeHelado = () => opcionCuartoDeHelado.querySelector('button').click();
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

accionConDelay(() => seleccionarCuartoDeHelado())
    .then(() => accionConDelay(() => elegirGusto('DDL de Cabra')))
    .then(() => accionConDelay(() => elegirGusto('Chocolate Cacao 80%')))
    .then(() => accionConDelay(() => confirmarGusto()))
    .then(() => accionConDelay(() => seleccionarCuartoDeHelado()))
    .then(() => accionConDelay(() => elegirGusto('Sambayón')))
    .then(() => accionConDelay(() => elegirGusto('Dulce de Leche Clásico')))
    .then(() => accionConDelay(() => confirmarGusto()));