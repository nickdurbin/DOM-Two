let rockets = document.querySelectorAll('.block');
let currentPosition = 10;
let goingToMars; 


rockets.forEach(move => move.addEventListener('mousedown', (event) => {
  goingToMars = true;
  
  let rocketPosition = 10;
    timerAdd();

    function timerAdd() {
      time = setTimeout(moveRight, 10);
    }

    function timerSubtract() {
      time = setTimeout(moveLeft, 10);
    }

    function moveLeft() {
      if (rocketPosition > 10) {
        rocketPosition--;
        event.target.style.marginLeft = `${rocketPosition}px`;
        timerSubtract();
      }
    }

    function moveRight() {
      if (goingToMars) {
        rocketPosition++;
        event.target.style.marginLeft = `${rocketPosition}px`;
        timerAdd();
      } else {
        moveLeft();
      }
      
    }
}))

rockets.forEach(stop => stop.addEventListener('mouseup', (event) => {
  goingToMars = false;
}))