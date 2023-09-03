import {confirmarGusto, elegirGusto, seleccionarCuartoDeHelado} from "./0_rapanui_rappi_crawler";

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
    () => elegirGusto('DDL de Leche de Cabra'),
    () => elegirGusto('Frambuesa'),
    () => confirmarGusto(),
    () => seleccionarCuartoDeHelado(),
    () => elegirGusto('Sambayón'),
    () => elegirGusto('DDL clásico'),
    () => confirmarGusto(),
]);