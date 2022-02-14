const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



const galleryListRef = document.querySelector(`.gallery`);
galleryListRef.style.listStyleType = "none";
galleryListRef.style.display = "flex"
galleryListRef.style.flexDirection = "column-reverse"
galleryListRef.style.alignItems = "center"
const markup = images.map((images) => `<li class="list-itemnew"><img src=${images.url} alt=${images.alt} width=400></li>` ).join(``);

galleryListRef.insertAdjacentHTML(`beforeend`, markup)









// for(let i=0;i<images.length;i++){
//   const galleryListItem = document.createElement(`li`)
//   galleryList.append(galleryListItem);
//   const imageRef = document.createElement(`img`);
//   imageRef.src = images[i].url;
//   imageRef.alt = images[i].alt;
// }