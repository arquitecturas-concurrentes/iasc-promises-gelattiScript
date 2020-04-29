const gustos = () => Array.from(document.querySelectorAll('div.input-radio > app-product-topping-item'));
const encontrarGusto = (nombre) => gustos().find(unGusto => unGusto.innerText === nombre);

const seleccionarCuartoDeHelado = () => document.querySelector('#product-986649').click();
const elegirGusto = (gusto) => encontrarGusto(gusto).querySelector('span').click();
const confirmarGusto = () => document.querySelector('#button-product-add-by-store').click();

const secuenciarConDelay = (accion1, accion2, delay = 1000) => {
    accion1();
    setTimeout(() => accion2(), delay);
};

secuenciarConDelay(
    () => seleccionarCuartoDeHelado(),
    () => secuenciarConDelay(
        () => elegirGusto('Limón con Jengibre'),
        () => secuenciarConDelay(
            () => elegirGusto('Chocolate Rapanuino'),
            () => secuenciarConDelay(
                () => confirmarGusto(),
                () => secuenciarConDelay(
                    () => seleccionarCuartoDeHelado(),
                    () => secuenciarConDelay(
                        () => elegirGusto('DDL Triple Tentación'),
                        () => secuenciarConDelay(
                            () => elegirGusto('Frambuesa Nevada'),
                            () => confirmarGusto()
                        )
                    )
                )
            )
        )
    )
);