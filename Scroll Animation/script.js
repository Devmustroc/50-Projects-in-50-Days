const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
    window.innerHeight / 5 * 4;
}