/* eslint-disable no-undef */
import { whatSystem } from "../system";
const visa = document.querySelector(".visa")

test("visa", () => {
    whatSystem(4000111122223333);
    expect(visa.textContent).toBe("Visa")
})