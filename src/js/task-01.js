
const elemItems = document.querySelectorAll('.item');

console.log(`В списке ${elemItems.length} категории`);

elemItems.forEach(elem => {
  console.log('Категория : ', elem.getElementsByTagName('h2')[0].textContent);
  console.log(
    'Количество эелментов : ',
    elem.getElementsByTagName('li').length
  );
  
});
