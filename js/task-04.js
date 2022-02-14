const counterValue = 0;

const incButton = document.querySelector(`button[data-action="increment"]`)
incButton.addEventListener(`click`, (counterValue) => { `${counterValue} + 1`} )

console.log(counterValue)