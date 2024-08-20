const visa = document.querySelector(".visa")
const mir = document.querySelector(".mir")
const mastercard = document.querySelector(".mastercard")
const unionpay = document.querySelector(".unionpay")

export function whatSystem(cardNumber) {
    const first = cardNumber[0];
    const second = cardNumber[1]
    const system = document.getElementById("system");

    const active = document.querySelector(".active")
    if (active) {
         active.classList.remove("active");
         active.classList.add("inactive")
    }

    if (first === "4") {
        visa.classList.remove("inactive");
        visa.classList.add("active");
        system.textContent = "Visa";
    }

    if (first === "5") {
        mastercard.classList.remove("inactive");
        mastercard.classList.add("active");
        system.textContent = "MasterCard"
    }

    if (first === "6") {
        unionpay.classList.remove("inactive");
        unionpay.classList.add("active");
        system.textContent = "UnionPay"
    }

    if (first === "2" && second === "2") {
        mir.classList.remove("inactive");
        mir.classList.add("active");
        system.textContent = "Мир"
    }
}