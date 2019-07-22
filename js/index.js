// 10 eventListners
addEventListener('mouseover', (event) => { event.target.style.backgroundColor = 'blue';});

addEventListener('keydown', (event) => { event.target.style.backgroundColor = 'blue';});

addEventListener('wheel', (event) => { event.target.style.backgroundColor = 'blue';});

addEventListener('drag / drop', (event) => { event.target.style.backgroundColor = 'blue';});

addEventListener('load', (event) => { event.target.style.backgroundColor = 'blue';});

addEventListener('focus', (event) => { event.target.style.backgroundColor = 'blue';});

addEventListener('resize', (event) => { event.target.style.backgroundColor = 'blue';});

addEventListener('scroll', (event) => { event.target.style.backgroundColor = 'blue';});

addEventListener('select', (event) => { event.target.style.backgroundColor = 'blue';});

addEventListener('dblclick', (event) => { event.target.style.backgroundColor = 'blue';});


// Navigation refresh prevention
addEventListener('mouseover', (event) => { event.preventDefault()});

// Stop propagation from bubbling
addEventListener('mouseover', (event) => { event.stopPropagation()});

// GSAP interactions