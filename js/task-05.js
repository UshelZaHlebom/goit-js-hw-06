let textInputRef = document.querySelector("#name-input")
let nameOutputRef = document.querySelector("#name-output")

textInputRef.addEventListener(`input`, (event)=> 
{
    if(textInputRef.value === "")
{nameOutputRef.textContent="Anonymous"}
    else
{nameOutputRef.textContent = event.currentTarget.value}
});

