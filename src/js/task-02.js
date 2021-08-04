const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const parentEl = document.querySelector('#ingredients')

const items = ingredients.map(ingredient => {

  const createItem = document.createElement('li');
  createItem.textContent = ingredient;
  console.log(createItem.textContent)
  return createItem


})

parentEl.append(...items)




