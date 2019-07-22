// eventListeners

// addEventListener('keydown', (event) => { event.target.style.backgroundColor = 'blue';});

// addEventListener('wheel', (event) => { event.target.style.backgroundColor = 'blue';});

// addEventListener('drag / drop', (event) => { event.target.style.backgroundColor = 'blue';});

// addEventListener('load', (event) => { event.target.style.backgroundColor = 'blue';});

// addEventListener('focus', (event) => { event.target.style.backgroundColor = 'blue';});

// addEventListener('resize', (event) => { event.target.style.backgroundColor = 'blue';});

// addEventListener('scroll', (event) => { event.target.style.backgroundColor = 'blue';});

// addEventListener('select', (event) => { event.target.style.backgroundColor = 'blue';});

// addEventListener('dblclick', (event) => { event.target.style.backgroundColor = 'blue';});


// Navigation eventListener and refresh prevention
let stopPropHandler = (event) => { event.stopPropagation() };
let preventHandler = (event) => { event.preventDefault() };

let mainNav = document.querySelector('.main-navigation');

mainNav.addEventListener('mouseover', (event) => { event.currentTarget.style.backgroundColor = 'gray'; });

mainNav.addEventListener('mouseout', (event) => { event.currentTarget.style.backgroundColor = 'white'; });

// Stop propagation from bubbling

// let stopPropHandler = (event) => { event.stopPropagation() };

// GSAP interactions