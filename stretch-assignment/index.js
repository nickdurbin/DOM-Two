// 
let rockets = document.querySelectorAll('.block');
let currentPosition = 0;
let goingToMars;

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

    function moveLeft() {
      if (rocketPosition > 10) {
        rocketPosition--;
        event.target.style.marginLeft = `${rocketPosition}px`;
        removeDistance();
      }
    }

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

rockets.forEach(stop => stop.addEventListener('mouseup', function () {
  goingToMars = false;
}))

const blockRed = document.querySelector('.block--red');
const blockBlue = document.querySelector('.block--blue');
const blockGreen = document.querySelector('.block--green');
const blockPink = document.querySelector('.block--pink');
const blockGray = document.querySelector('.block--gray');

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