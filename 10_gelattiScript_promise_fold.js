const gustos = () => Array.from(document.querySelectorAll('div.input-radio > app-product-topping-item'));
const encontrarGusto = (nombre) => gustos().find(unGusto => unGusto.innerText.includes(nombre));

const seleccionarCuartoDeHelado = () => document.querySelectorAll('#category-products-60277')[3].click();
const elegirGusto = (gusto) => {
    const gustoBuscado = encontrarGusto(gusto);
    if(!gustoBuscado) {
        throw new Error(`No encontré el gusto '${gusto}'`);
    }
    gustoBuscado.getElementsByTagName("button")[1].click();
};
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
    () => elegirGusto('Lemon Pie'),
    () => elegirGusto('Chocolate Cacao 80%'),
    () => confirmarGusto(),
    () => seleccionarCuartoDeHelado(),
    () => elegirGusto('Sambayón'),
    () => elegirGusto('Dulce de Leche Clásico'),
    () => confirmarGusto(),
]);