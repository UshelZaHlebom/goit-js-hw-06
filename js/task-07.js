const inputSizeRef = document.querySelector(`#font-size-control`)
const spanSizeRef = document.querySelector(`#text`)

inputSizeRef.addEventListener("input", (event) => {
    spanSizeRef.style.fontSize = inputSizeRef.value + "px"
  });