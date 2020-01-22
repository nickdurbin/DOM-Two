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
const destination = document.querySelectorAll('.destination');

// 10 Event Listeners

// Anchor tags enlarge onclick with the prevent default forEach method
anchor.forEach(tag => tag.addEventListener('click', (event) => {
  event.preventDefault()
  event.target.style.fontSize = '2.8rem';
}));

// Paragraph elements turn to purple on mouseleave
paragraph.forEach(tag => tag.addEventListener('mouseleave', (event) => {
  event.target.style.color = 'purple';
}));

// The font turns green on keydown
window.addEventListener('keydown', (event) => { event.target.style.color = 'green';});

// The font turns back to black on keyup
window.addEventListener('keyup', (event) => { event.target.style.color = 'black';});

// Using mouseenter we turn the background yellow on the headline intro
intro.addEventListener('mouseenter', (event) => { event.target.style.backgroundColor = 'yellow';});

// Using mouseover with currentTarget we turn the background gray of the nav element
mainNav.addEventListener('mouseover', (event) => { event.currentTarget.style.backgroundColor = 'gray'; });

// Using mouseout we turn the nav element back to white
mainNav.addEventListener('mouseout', (event) => { event.currentTarget.style.backgroundColor = 'white'; });

// Mousedown increases the font size of the header in the Fun section
fun.addEventListener('mousedown', (event) => { event.target.style.fontSize = '4rem'; });

// Double clicking the mouse will change the text in the Footer to 'Changed'
footer.addEventListener('dblclick', (event) => { event.target.innerHTML = 'Changed';});

// Click the mouse will enlarge the button 1.2x
button.addEventListener('click', (event) => { event.target.style.transform = 'scale(1.2)';});

// Running through the nodelist of destination elements we change the background to light blue and keep it from propagating to other elements
destination.forEach(section => section.addEventListener('click', (event) => {
  event.stopPropagation()
  event.target.style.backgroundColor = "lightblue";
}));

// GSAP interactions
const tl = new TimelineMax();

tl.fromTo(content, 1, { height: "0%" }, { height: "90%", ease: Power2.easeInOut })
  .fromTo(content, 1.2, { width: "100%" }, { width: "90%", ease: Power2.easeInOut })
  .fromTo(nav, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.3")

// Propgation and Prevent Handler Variables (not used)
let stopPropHandler = (event) => { event.stopPropagation() };
let preventHandler = (event) => { event.preventDefault() };