import { validateCard } from "./validate.js"

const form = document.getElementById("validate-form");

form.addEventListener('submit', (e) => {
    e.preventDefault;
    const input = document.getElementById("input");
    const cardNumber = input.value;
    const validate = validateCard(cardNumber);
    if (validate) {
        alert("Карта прошла валидацию")
    }
    if (!validate) {
        alert("Карта не прошла валидацию")
    }
})