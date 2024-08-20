export function validateCard(cardNumber) {
    const cardNumberString = cardNumber.toString();
    let sum = 0;

    if (cardNumberString.length !== 16) {
        alert("Неверная длина номера");
        return false
    }

    for (let i=0; i<cardNumberString.length; i++) {
        let digit = Number(cardNumberString[i]);
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