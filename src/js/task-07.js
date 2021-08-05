const rangeEl = document.querySelector('[id="font-size-control"]')

const textEl = document.querySelector('[id="text"]')


rangeEl.addEventListener('input', changeFontSize)

function changeFontSize () {
  
     textEl.style.fontSize = Number(rangeEl.value) + 'px'                           

}
