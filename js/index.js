// Variables
const firstParagraph = document.querySelectorAll('p')[0];
const mainNav = document.querySelector('.main-navigation');
const intro = document.querySelector('.intro h2');
const hero = document.querySelector('.intro img');
const header = document.querySelector('.logo-heading');
const text = document.querySelector('.text-content');
const button = document.querySelector('.btn');
const content= document.querySelector('.container');
const nav = document.querySelector('.nav');

// 10 Event Listeners
firstParagraph.addEventListener('keydown', (event) => { event.target.style.backgroundColor = 'green';});

intro.addEventListener('wheel', (event) => { event.target.style.backgroundColor = 'yellow';});

mainNav.addEventListener('mouseover', (event) => { event.currentTarget.style.backgroundColor = 'gray'; });

mainNav.addEventListener('mouseout', (event) => { event.currentTarget.style.backgroundColor = 'white'; });

text.addEventListener('scroll', (event) => { event.target.style.fontSize = '5rem'; });

hero.addEventListener('focus', (event) => { event.target.style.backgroundColor = 'green'; });

addEventListener('drag / drop', (event) => { event.target.style.backgroundColor = 'blue';});

btn.addEventListener('click', (event) => { event.target.alert = 'You Clicked Me';});

btn.addEventListener('dblclick', (event) => { event.target.innerHTML = 'Hello';});

// Propgation and Prevent Handler Variables
let stopPropHandler = (event) => { event.stopPropagation() };
let preventHandler = (event) => { event.preventDefault() };

// GSAP interactions
const tl = new TimelineMax();

tl.fromTo(content, 1, { height: "0%" }, { height: "90%", ease: Power2.easeInOut })
  .fromTo(content, 1.2, { width: "100%" }, { width: "90%", ease: Power2.easeInOut })
  .fromTo(nav, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.3")