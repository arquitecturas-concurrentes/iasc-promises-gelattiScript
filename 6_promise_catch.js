// Promesa que puede resolverse o fallar
let inversa = (numero) => {
    return new Promise((resolve, reject) => {
        if (numero === 0) {
            const error = new Error("No existe la inversa de 0");
            reject(error);
        } else {
            resolve(1 / numero);
        }
    });
};

// Otra forma de crear promesas rechazadas
let inversa = (numero) => {
    if (numero === 0) {
        const error = new Error("No existe la inversa de 0");
        return Promise.reject(error);
    } else {
        return Promise.resolve(1 / numero);
    }
};

inversa(5)
    .then(resultado => console.log("La inversa es: " + resultado))
    .catch(error => console.error(error.message));

inversa(0)
    .then(resultado => console.log("La inversa es: " + resultado))
    .catch(error => console.error(error.message));