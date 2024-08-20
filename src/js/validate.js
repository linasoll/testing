export function validateCard(cardNumber) {
    let sum = 0;

    if (cardNumber.length !== 16) {
        alert("Неверная длина номера");
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