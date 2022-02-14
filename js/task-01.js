// Task 1.1

const categoriesRef = document.querySelectorAll(`.item`);
console.log(`Number of categories : ${categoriesRef.length}`);

//Task 1.2

const itemHeaderRef = document.querySelectorAll(`h2`);
for(let i = 0; i < itemHeaderRef.length; i++){
    const itemSubcategory = document.querySelectorAll(`.item > ul`);
    console.log(`
    Category : ${itemHeaderRef[i].textContent} 
    Elements : ${itemSubcategory[i].children.length}
    `)
}


