export function validateCard(cardNumber) {
    const errLen = document.getElementById("err");
    let sum = 0;

    if (cardNumber.length !== 16) {
        errLen.classList.remove("invisible");
        return false
    }

    for (let i=0; i<cardNumber.length; i++) {
        let digit = Number(cardNumber[i]);
        if (i % 2 === 0) {
            digit *=2;
            if (digit > 9) {
                digit -=9;
            }
        }
        sum += digit
    }

    return Number(sum % 10) === 0;
}