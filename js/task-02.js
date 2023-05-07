const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsGroup = document.querySelector('#ingredients');
let temp = [];

ingredients.forEach(elem => {
  const item = document.createElement('li');
  item.textContent = elem;
  item.classList.add('item');

  temp.push(item);
})
ingredientsGroup.append(...temp);


