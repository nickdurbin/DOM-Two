// Variables for the traveler section
let rockets = document.querySelectorAll('.block');
let currentPosition = 0;
let goingToMars;

// Each rocket runs through a forEach method to receive the mousedown event.
rockets.forEach(move => move.addEventListener('mousedown', () => {
  goingToMars = true;

    // Functionality to send the rockets right while mouse is being held down
    function moveRight() {
      if (currentPosition = 0) {
        moveRight;
        goingToMars = true;
      } else {
        moveLeft();
        goingToMars = false;
      }
    }

    // Functionality to send the rockets back to starting position
    function moveLeft() {
      if (currentPosition > 499) {
        moveLeft();
        goingToMars = false;
      } else {
        moveRight();
        goingToMars = true;
      }
    }
}))

// Functionality to begin the movement left by releasing the button with event listener mouseup
rockets.forEach(stop => stop.addEventListener('mouseup', function () {
  goingToMars = false;
}))

// On click, moves the rocket clicked to the top
rockets.forEach(moveUp => moveUp.addEventListener('click', (event) => {
  if (event = event.target.style.order = '') {
     event.target.style.order = 1;
  } else {
  rockets.forEach(upOne => upOne.style.order += 1);
  }
}))