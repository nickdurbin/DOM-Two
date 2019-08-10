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