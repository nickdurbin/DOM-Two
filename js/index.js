// Variables
const paragraph = document.querySelectorAll('p');
const mainNav = document.querySelector('.main-navigation');
const intro = document.querySelector('.intro h2');
const hero = document.querySelector('.intro img');
const header = document.querySelector('.logo-heading');
const text = document.querySelector('.text-content');
const button = document.querySelector('#mouseEvent');
const content= document.querySelector('.container');
const nav = document.querySelector('.nav');
const footer = document.querySelector('.footer');
const fun = document.querySelector('#fun');
const anchor = document.querySelectorAll('.nav a');


// 10 Event Listeners

// Anchor tags with the prevent default forEach method
anchor.forEach(tag => tag.addEventListener('click', (event) => {
  event.preventDefault()
  event.target.style.fontSize = '2.8rem';
}));

paragraph.forEach(tag => tag.addEventListener('mouseleave', (event) => {
  event.stopPropagation()
  event.target.style.color = 'purple';
}));

window.addEventListener('keydown', (event) => { event.target.style.color = 'green';});

window.addEventListener('keyup', (event) => { event.target.style.color = 'black';});

intro.addEventListener('mouseenter', (event) => { event.target.style.backgroundColor = 'yellow';});

mainNav.addEventListener('mouseover', (event) => { event.currentTarget.style.backgroundColor = 'gray'; });

mainNav.addEventListener('mouseout', (event) => { event.currentTarget.style.backgroundColor = 'white'; });

fun.addEventListener('mousedown', (event) => { event.target.style.fontSize = '4rem'; });

footer.addEventListener('dblclick', (event) => { event.target.innerHTML = 'Changed';});

button.addEventListener('click', (event) => { event.target.style.transform = 'scale(1.2)';});

// GSAP interactions
const tl = new TimelineMax();

tl.fromTo(content, 1, { height: "0%" }, { height: "90%", ease: Power2.easeInOut })
  .fromTo(content, 1.2, { width: "100%" }, { width: "90%", ease: Power2.easeInOut })
  .fromTo(nav, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.3")

// Propgation and Prevent Handler Variables
let stopPropHandler = (event) => { event.stopPropagation() };
let preventHandler = (event) => { event.preventDefault() };