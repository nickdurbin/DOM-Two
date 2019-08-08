// eventListeners

// addEventListener('keydown', (event) => { event.target.style.backgroundColor = 'blue';});

// addEventListener('wheel', (event) => { event.target.style.backgroundColor = 'blue';});

// addEventListener('drag / drop', (event) => { event.target.style.backgroundColor = 'blue';});

// addEventListener('load', (event) => { event.target.style.backgroundColor = 'blue';});

// addEventListener('focus', (event) => { event.target.style.backgroundColor = 'blue';});



// addEventListener('scroll', (event) => { event.target.style.backgroundColor = 'blue';});

// addEventListener('select', (event) => { event.target.style.backgroundColor = 'blue';});

// addEventListener('dblclick', (event) => { event.target.style.backgroundColor = 'blue';});


// Navigation eventListener and refresh prevention
let stopPropHandler = (event) => { event.stopPropagation() };
let preventHandler = (event) => { event.preventDefault() };

let mainNav = document.querySelector('.main-navigation');

mainNav.addEventListener('mouseover', (event) => { event.currentTarget.style.backgroundColor = 'gray'; });

mainNav.addEventListener('mouseout', (event) => { event.currentTarget.style.backgroundColor = 'white'; });

// Resize the Heading Font 
const intro = document.querySelector('.intro h2');
intro.addEventListener('scroll', (event) => { event.target.style.fontSize = '5rem'; });

const hero = document.querySelector('.intro img');
hero.addEventListener('focusin', (event) => { event.target.style.backgroundColor = ''; });

// Stop propagation from bubbling

// let stopPropHandler = (event) => { event.stopPropagation() };

// GSAP interactions
const content= document.querySelector('.container');
const nav = document.querySelector('.nav');

// Animations for the navigation using Tween and Timeline
const tl = new TimelineMax();

tl.fromTo(content, 1, { height: "0%" }, { height: "90%", ease: Power2.easeInOut })
  .fromTo(content, 1.2, { width: "100%" }, { width: "90%", ease: Power2.easeInOut })
  .fromTo(nav, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.3")