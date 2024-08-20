/* eslint-disable no-undef */
import { validateCard } from "../validate.js";

test("Неверная длина номера", () => {
    const num = 12345;
    expect(validateCard(num)).toBe(false)
})

test("Успешная валидация", () => {
    const num = 4716449904970478;
    expect(validateCard(num)).toBe(true)
})