


let plusBtn = document.querySelector(`button[data-action="increment"]`)
let minusBtn = document.querySelector(`button[data-action="decrement"]`)
let currentValue = document.querySelector(`#value`);
let counterValue = 0;
plusBtn.addEventListener(`click`, () => {counterValue += 1; currentValue.textContent = counterValue;} );
minusBtn.addEventListener(`click`, () => {counterValue -= 1; currentValue.textContent = counterValue;} );

