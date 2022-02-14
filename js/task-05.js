let textInputRef = document.querySelector("#name-input")
let nameOutputRef = document.querySelector("#name-output")

textInputRef.addEventListener(`input`, (event)=> {nameOutputRef.textContent = event.currentTarget.value})