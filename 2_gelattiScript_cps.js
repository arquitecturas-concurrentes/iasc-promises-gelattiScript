const gustos = () => Array.from(document.querySelectorAll('div.input-radio > app-product-topping-item > div.topping-restaurant'));
const encontrarGusto = (nombre) => gustos().find(unGusto => unGusto.innerText.includes(nombre));

const seleccionarCuartoDeHelado = () => document.querySelectorAll('#category-products-60277')[2].click();
const elegirGusto = (gusto) => {
    const gustoBuscado = encontrarGusto(gusto);
    if(!gustoBuscado) {
        throw new Error(`No encontré el gusto '${gusto}'`);
    }
    gustoBuscado.getElementsByTagName("button")[1].click();
};
const confirmarGusto = () => document.querySelector('#button-product-add-by-store').click();

const secuenciarConDelay = (accion1, accion2, delay = 1000) => {
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