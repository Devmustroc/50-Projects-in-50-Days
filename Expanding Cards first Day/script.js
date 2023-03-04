const panels = document.querySelectorAll('.panel')  // panels is a reserved word

panels.forEach(panel => {  // panels is a reserved word
    panel.addEventListener('click', () => {  // panel is a reserved word
        removeActiveClasses()  // removeActiveClasses is a reserved word
        panel.classList.add('active')  // panel is a reserved word
    })
})
function removeActiveClasses() {  // removeActiveClasses is a reserved word
    panels.forEach(panel => {   // panels is a reserved word
        panel.classList.remove('active')  // panel is a reserved word
    })
}