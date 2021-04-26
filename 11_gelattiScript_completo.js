const saborSelector = 'div.input-radio > app-product-topping-item > div.topping-restaurant';
const gustos = () => Array.from(document.querySelectorAll(saborSelector));
const encontrarGusto = (nombre) => gustos().find(unGusto => unGusto.innerText.includes(nombre));

const seleccionarCuartoDeHelado = () => ({
    accion: () => document.querySelectorAll('#category-products-60277')[2].click(),
    condicionFin: () => !!document.querySelector(saborSelector)
});
const elegirGusto = (gusto) => ({
    accion: () => {
        const gustoBuscado = encontrarGusto(gusto);
        if(!gustoBuscado) {
            throw new Error(`No encontré el gusto '${gusto}'`);
        }
        gustoBuscado.getElementsByTagName("button")[1].click();
    },
    condicionFin: () => !!encontrarGusto(gusto).querySelector('.active')
});
const confirmarGusto = () => ({
    accion: () => document.querySelector('#button-product-add-by-store').click(),
    condicionFin: () => !!document.querySelector(saborSelector)
});

const wait = (condicion) => {
    const retry = (condicion, resolve, intentos) => {
        if (intentos <= 0) {
            throw 'Timeout'
        }
        if (condicion()) {
            resolve()
        } else {
            setTimeout(() => retry(condicion, resolve, intentos - 1), 100)
        }
    };
    return new Promise(resolve => retry(condicion, resolve, 50))
};

const pipeline = (commands) => commands.reduce((acum, command) => acum.then(() => {
    command.accion();
    return wait(command.condicionFin)
}), Promise.resolve());

pipeline([
    seleccionarCuartoDeHelado(),
    elegirGusto('DDL de Cabra'),
    confirmarGusto(),
]);