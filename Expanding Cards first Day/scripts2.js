const panel = document.querySelectorAll('.panel'); // select all panels

panel.forEach(panel => { // for each panel, add an event listener
    panel.addEventListener('click', () => { // when clicked, remove active classes from all panels
        removeActiveClasses() // then add active class to the panel that was clicked
        panel.classList.add('active')
    })
})

function removeActiveClasses() { // remove active class from all panels
    panel.forEach(panel => {
        panel.classList.remove('active') // remove active class from all panels
    })
}
