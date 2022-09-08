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

const secuenciarConDelay = (accion1, accion2, delay = 3000) => {
    accion1();
    setTimeout(() => accion2(), delay);
};

secuenciarConDelay(
    () => seleccionarCuartoDeHelado(),
    () => secuenciarConDelay(
        () => elegirGusto('DDL de Cabra'),
        () => secuenciarConDelay(
            () => elegirGusto('Chocolate Cacao 80%'),
            () => secuenciarConDelay(
                () => confirmarGusto(),
                () => secuenciarConDelay(
                    () => seleccionarCuartoDeHelado(),
                    () => secuenciarConDelay(
                        () => elegirGusto('Sambayón'),
                        () => secuenciarConDelay(
                            () => elegirGusto('Dulce de Leche Clásico'),
                            () => confirmarGusto()
                        )
                    )
                )
            )
        )
    )
);