const boxes = document.querySelectorAll(".box")
const overlay = document.querySelector(".box_overlay")



boxes.forEach(box => box.addEventListener('mouseover', (event) => {
    event.currentTarget.style.childElement('.box_overlay').height = '87px'
    // overlay.style.height = '87px';
    // overlay.style.backgroundColor = '#3168a6'; 
}))

// boxes.forEach(box => box.addEventListener('mouseover', (event) => {
//   event.stopPropagation()
//   event.target.style.height = "100px"
// }))

// boxes.forEach(box => box.addEventListener('mouseout', (event) => {
//   event.stopPropagation()
//   event.target.style.height = "200px"
// }))

boxes.forEach(box => box.addEventListener('mouseout', () => {
    overlay.style.height = '35px';
    overlay.style.backgroundColor = '#0a304e'; 
}))