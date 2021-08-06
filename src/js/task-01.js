
const elemItems = document.querySelectorAll('.item');

console.log(`В списке ${elemItems.length} категории`);

elemItems.forEach(elem => {
  console.log('Категория : ', elem.firstElementChild.textContent);
  console.log(
    'Количество эелментов : ',
    elem.lastElementChild.children.length
  );
  
});

