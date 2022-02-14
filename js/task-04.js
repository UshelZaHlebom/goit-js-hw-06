


let plusBtnRef = document.querySelector(`button[data-action="increment"]`)
let minusBtnRef = document.querySelector(`button[data-action="decrement"]`)
let currentValueRef = document.querySelector(`#value`);
let counterValue = 0;
plusBtnRef.addEventListener(`click`, () => {counterValue += 1; currentValueRef.textContent = counterValue;} );
minusBtnRef.addEventListener(`click`, () => {counterValue -= 1; currentValueRef.textContent = counterValue;} );

