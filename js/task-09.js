const changeButtonRef = document.querySelector(`.widget > button`);
const colorInfoRef = document.querySelector(`.color`);
const theBody = document.body;

changeButtonRef.addEventListener('click', () => {
  theBody.style.backgroundColor = getRandomHexColor();
  colorInfoRef.textContent = theBody.style.backgroundColor;
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
