import { validateCard } from "./validate.js"
import { whatSystem } from "./system.js";

const form = document.getElementById("validate-form");
const success = document.getElementById("success");
const error = document.getElementById("error");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById("input");
    const cardNumber = input.value;
    const validate = validateCard(cardNumber);
    if (validate) {
        whatSystem(cardNumber);
        success.classList.remove("invisible")
        error.classList.add("invisible")
    }
    if (!validate) {
        error.classList.remove("invisible")
        success.classList.add("invisible")
    }
})