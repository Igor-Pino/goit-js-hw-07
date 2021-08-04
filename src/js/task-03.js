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






const parentEl = document.querySelector('#gallery')

const items = images.map(image => {
  const createThumb = document.createElement('div')
  createThumb.classList.add('js_flex')

  const createItem = document.createElement('img');
  createItem.classList.add('image')
  createItem.src = image.url;
  createItem.alt = image.alt;
  
  console.log(createItem)
  createThumb.append(createItem)
  return createThumb


})

parentEl.append(...items)
