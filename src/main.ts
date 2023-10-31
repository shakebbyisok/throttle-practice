import throttle from './throttle.js';


const textInput = document.getElementById('textInput') as HTMLInputElement;
const sendButton = document.getElementById('sendButton') as HTMLButtonElement;
const delayInput = document.getElementById('delayInput') as HTMLInputElement; 
const messageOutput = document.getElementById('messageOutput') as HTMLElement;

let throttledLog: (input: string) => void;
let isActive = false;

sendButton.addEventListener('click', () => {
    const input = textInput.value;
    const delay = parseInt(delayInput.value);

    if (!input) return; 

    throttledLog = throttle((input: string) => {
        messageOutput.textContent = `Received after delay: ${input}`;
        isActive = false;
    }, delay);

    messageOutput.textContent = `Received immediately: ${input}`;
    
    if (!isActive) {
        isActive = true;
        throttledLog(input);
    } else {
        messageOutput.textContent = "El throttle aún está activo, espera...";
    }

    textInput.value = '';  
});
