let inputValue = document.querySelector(`#validation-input`);
let allowedLength = inputValue.getAttribute(`data-length`);


inputValue.addEventListener("blur", () => {
    
    let utilityArray = Array.from(inputValue.value)
    
    if (utilityArray.length === allowedLength*1){
        inputValue.classList.add(`#validation-input.valid`);
        inputValue.classList.remove(`#validation-input.invalid`);
    } else {
        inputValue.classList.add(`#validation-input.invalid`);
        inputValue.classList.remove(`#validation-input.valid`);
    }
    
});

