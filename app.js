// Crear un programa en Javascript que realice lo siguiente:
// El factorial de un número es igual al producto de todos los números enteros positivos desde el 1 hasta dicho número
// Ejemplo: 4! = 1 x 2 x 3 x 4 = 24

const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Ingresa un número entero positivo: "));
let factorial = 1;

if (!Number.isInteger(numero) || numero < 0) {
    console.log("Ingresa un número entero válido.");
} else {
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    console.log("El factorial de " + numero + " es: " + factorial);
}
