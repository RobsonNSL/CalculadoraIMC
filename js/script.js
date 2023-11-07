import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { IMC, notANumber } from "./utils.js";

const form = document.querySelector('form');
const formWeight = document.querySelector('#weight');
const formHeight = document.querySelector('#height');

formWeight.oninput = () => AlertError.close()
formHeight.oninput = () => AlertError.close()

form.onsubmit = (event) => {
    event.preventDefault()

    const weight = formWeight.value;
    const height = formHeight.value;

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height);

    if (weightOrHeightIsNotANumber) {
        AlertError.open()
        return;

    } else {
        AlertError.close()
    }

    const result = IMC(weight, height)

    displayResultMessage(result)
}

function displayResultMessage(result) {
    Modal.message.innerHTML = `O IMC é: ${result}`

    Modal.open();
}

