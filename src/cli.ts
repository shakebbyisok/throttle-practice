import * as readline from 'readline'; 
import throttle from './throttle.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let throttledLog: (input: string) => void;
let isActive = false;

// Inicio del programa
console.log("Bienvenido al probador de la función throttle.");
rl.question("Introduce el tiempo de espera (ms) para el throttle: ", (delay) => {
    const waitTime = parseInt(delay);
    if (isNaN(waitTime)) {
        console.error("Por favor, introduce un número válido.");
        process.exit(1);
    }

    throttledLog = throttle((input: string) => {
        console.log(`Received after delay: ${input}`);
        isActive = false;
    }, waitTime);

    console.log("¡Listo! Escribe algo y presiona Enter. Escribe 'exit' para finalizar.");

    rl.on('line', (input) => {
        if (input.toLowerCase() === "exit") {
            console.log("Finalizando el programa...");
            rl.close();
            return;
        }
        
        console.log(`Received immediately: ${input}`);
        if (!isActive) {
            isActive = true;
            throttledLog(input);
        } else {
            console.log("El throttle aún está activo, espera...");
        }
    });
});
