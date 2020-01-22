const boxes = document.querySelectorAll(".box")
const overlays = document.querySelectorAll(".box_overlay")

boxes.forEach((box, i) => box.addEventListener('mouseover', (event) => {
   overlays[i].style.height = '87px';
   overlays[i].style.backgroundColor = '#3168a6'; 
}))

boxes.forEach((box, i) => box.addEventListener('mouseout', (event) => {
   overlays[i].style.height = '35px';
   overlays[i].style.backgroundColor = '#0a304e'; 
}))