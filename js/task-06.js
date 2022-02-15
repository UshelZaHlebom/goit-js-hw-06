let inputValueRef = document.querySelector(`#validation-input`);
let allowedLengthRef = inputValueRef.getAttribute(`data-length`);


inputValueRef.addEventListener("blur", () => {
    
    let utilityArray = Array.from(inputValueRef.value)
    
    if (utilityArray.length === allowedLengthRef*1){
        inputValueRef.classList.add(`valid`);
        inputValueRef.classList.remove(`invalid`);
    } else {
        inputValueRef.classList.add(`invalid`);
        inputValueRef.classList.remove(`valid`);
    }
    
});

