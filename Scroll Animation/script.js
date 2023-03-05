const boxes = document.querySelectorAll('.box');    // select all the elements with the class 'box'

window.addEventListener('scroll', checkBoxes); // when the user scrolls, run the function checkBoxes

checkBoxes(); // run the function checkBoxes
function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4; // the height of the viewport divided by 5 and multiplied by 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top // getBoundingClientRect() returns the size of an element and its position relative to the viewport.

        if (boxTop < triggerBottom) { // if the box is in the viewport
            box.classList.add('show') // add the class 'show' to the box
        } else { // if the box is not in the viewport
            box.classList.remove('show') // remove the class 'show' from the box
        }
    });
}