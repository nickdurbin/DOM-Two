// Variables for each individual block
const blockRed = document.querySelector('.block--red');
const blockBlue = document.querySelector('.block--blue');
const blockGreen = document.querySelector('.block--green');
const blockPink = document.querySelector('.block--pink');
const blockGray = document.querySelector('.block--gray');

// Variables for the traveler section
let rockets = document.querySelectorAll('.block');
let currentPosition = 0;
let goingToMars;

// Each rocket runs through a forEach method to receive the mousedown event.
rockets.forEach(move => move.addEventListener('mousedown', (event) => {
  goingToMars = true;
  
  let rocketPosition = 10;
    addDistance();

    function addDistance() {
      time = setTimeout(moveRight, 10);
    }

    function removeDistance() {
      time = setTimeout(moveLeft, 10);
    }

    // Functionality to send the rockets back to starting position
    function moveLeft() {
      if (rocketPosition > 10) {
        rocketPosition--;
        event.target.style.marginLeft = `${rocketPosition}px`;
        removeDistance();
      }
    }

    // Functionality to send the rockets right while mouse is being held down
    function moveRight() {
      if (goingToMars) {
        rocketPosition++;
        event.target.style.marginLeft = `${rocketPosition}px`;
        addDistance();
      } else {
        moveLeft();
      }
    }
}))

// Functionality to begin the movement left by releasing the button with event listener mouseup
rockets.forEach(stop => stop.addEventListener('mouseup', function () {
  goingToMars = false;
}))

// On click, moves the block clicked to the top
blockRed.addEventListener('click', (event) => {
  event.target.style.order = 1;
  blockBlue.style.order += 1;
  blockGreen.style.order += 1;
  blockPink.style.order += 1;
  blockGray.style.order += 1;
});
blockBlue.addEventListener('click', (event) => {
  event.target.style.order = 1;
  blockRed.style.order += 1;
  blockGreen.style.order += 1;
  blockPink.style.order += 1;
  blockGray.style.order += 1;
});
blockGreen.addEventListener('click', (event) => {
  event.target.style.order = 1;
  blockRed.style.order += 1;
  blockBlue.style.order += 1;
  blockPink.style.order += 1;
  blockGray.style.order += 1;
});
blockPink.addEventListener('click', (event) => {
  event.target.style.order = 1;
  blockBlue.style.order += 1;
  blockRed.style.order += 1;
  blockGreen.style.order += 1;
  blockGray.style.order += 1;
});
blockGray.addEventListener('click', (event) => {
  event.target.style.order = 1;
  blockBlue.style.order += 1;
  blockRed.style.order += 1;
  blockGreen.style.order += 1;
  blockPink.style.order += 1;
});