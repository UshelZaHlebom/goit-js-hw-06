const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const vegetableListRef=document.querySelector(`#ingredients`)

for(let i=0;i<ingredients.length;i++){
const vegetableListItem = document.createElement(`li`);
vegetableListItem.classList.add(`item`);
vegetableListItem.textContent = `${ingredients[i]}`;
vegetableListRef.append(vegetableListItem)
}

