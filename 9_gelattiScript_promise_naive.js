import {confirmarGusto, elegirGusto, seleccionarCuartoDeHelado} from "./0_rapanui_rappi_crawler";

const accionConDelay = (accion, delay = 3000) => {
    return new Promise((resolve) => {
        accion();
        setTimeout(() => resolve(), delay);
    });
};

accionConDelay(() => seleccionarCuartoDeHelado())
    .then(() => accionConDelay(() => elegirGusto('DDL de Leche de Cabra')))
    .then(() => accionConDelay(() => elegirGusto('Frambuesa')))
    .then(() => accionConDelay(() => confirmarGusto()))
    .then(() => accionConDelay(() => seleccionarCuartoDeHelado()))
    .then(() => accionConDelay(() => elegirGusto('Sambayón')))
    .then(() => accionConDelay(() => elegirGusto('DDL clásico')))
    .then(() => accionConDelay(() => confirmarGusto()));