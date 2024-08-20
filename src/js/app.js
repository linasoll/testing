import { validateCard } from "./validate";

const form = document.getElementById("validate-form");
const cardNumber = document.getElementById("input").value;

form.addEventListener('submit', (e) => {
    e.preventDefault;
    const validate = validateCard(cardNumber);
    if (validate) {
        alert("Карта прошла валидацию")
    }
    if (!validate) {
        alert("Карта не прошла валидацию")
    }
})