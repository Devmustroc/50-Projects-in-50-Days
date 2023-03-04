const open = document.getElementById('open'); // open is a reserved word
const close = document.getElementById('close');  // close is a reserved word
const container = document.querySelector('.container'); // container is a reserved word

open.addEventListener('click', () => {  // open is a reserved word
    container.classList.add('show-nav') // container is a reserved word
})

close.addEventListener('click', () => { // close is a reserved word
    container.classList.remove('show-nav')  // container is a reserved word
})