import {confirmarGusto, elegirGusto, seleccionarCuartoDeHelado} from "./0_rapanui_rappi_crawler";

const secuenciarConDelay = (accion1, accion2, delay = 3000) => {
    accion1();
    setTimeout(() => accion2(), delay);
};

secuenciarConDelay(
    () => seleccionarCuartoDeHelado(),
    () => secuenciarConDelay(
        () => elegirGusto('DDL de Leche de Cabra'),
        () => secuenciarConDelay(
            () => elegirGusto('Frambuesa'),
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