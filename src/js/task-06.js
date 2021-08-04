const inputEl = document.querySelector('input')

inputEl.addEventListener('blur', checkValidation)


const inputLength = Number(inputEl.getAttribute('data-length'))


function checkValidation() {


  if(inputEl.value.length === inputLength) {
     
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid')    
  } else
    inputEl.classList.add('invalid');
    
}