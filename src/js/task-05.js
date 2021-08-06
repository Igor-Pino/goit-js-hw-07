const inputEl = document.querySelector('input')

const spanEl = document.querySelector('#name-output')

inputEl.addEventListener('input', changeName)

function changeName (event) {
    
   spanEl.textContent = event.target.value
   if(event.target.value === '') {
    spanEl.textContent = 'незнакомец'
   }    
    
}
