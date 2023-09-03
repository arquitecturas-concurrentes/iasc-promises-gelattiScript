import {confirmarGusto, elegirGusto, seleccionarCuartoDeHelado} from "./0_rapanui_rappi_crawler";

const secuenciarConDelay = (accion1, accion2, delay = 3000) => {
    accion1();
    setTimeout(accion2, delay);
};

const pipeline = (acciones) => {
    const accionesSecuenciadas = acciones.reduceRight((accionN, accionNMenosUno) => {
        return () => secuenciarConDelay(accionNMenosUno, accionN);
    });
    accionesSecuenciadas();
};

pipeline([
    () => seleccionarCuartoDeHelado(),
    () => elegirGusto('DDL de Leche de Cabra'),
    () => elegirGusto('Frambuesa'),
    () => confirmarGusto(),
    () => seleccionarCuartoDeHelado(),
    () => elegirGusto('Sambayón'),
    () => elegirGusto('DDL clásico'),
    () => confirmarGusto()
]);