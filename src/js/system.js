const visa = document.querySelector(".visa")
const mir = document.querySelector(".mir")
const mastercard = document.querySelector(".mastercard")
const unionpay = document.querySelector(".unionpay")

export function whatSystem(cardNumber) {
    const first = cardNumber[0];
    const second = cardNumber[1]

    const active = document.querySelector(".active")
    if (active) {
         active.classList.remove("active");
    }

    if (first === "4") {
        visa.classList.remove("inactive");
        visa.classList.add("active");
    }

    if (first === "5") {
        mastercard.classList.remove("inactive");
        mastercard.classList.add("active")
    }

    if (first === "6") {
        mastercard.classList.remove("inactive");
        unionpay.classList.add("active")
    }

    if (first === "2" && second === "2") {
        mastercard.classList.remove("inactive");
        mir.classList.add("active")
    }
}