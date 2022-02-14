let inputValueRef = document.querySelector(`#validation-input`);
let allowedLengthRef = inputValueRef.getAttribute(`data-length`);


inputValueRef.addEventListener("blur", () => {
    
    let utilityArray = Array.from(inputValueRef.value)
    
    if (utilityArray.length === allowedLengthRef*1){
        inputValueRef.classList.add(`#validation-input.valid`);
        inputValueRef.classList.remove(`#validation-input.invalid`);
    } else {
        inputValueRef.classList.add(`#validation-input.invalid`);
        inputValueRef.classList.remove(`#validation-input.valid`);
    }
    
});

