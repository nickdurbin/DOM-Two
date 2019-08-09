function moveRocket() {
  let rocket = document.querySelectorAll('.block');
  let leftPosition = 0;
  let time = setInterval(moveLeft, 10);

  rocket.forEach(grab => grab.addEventListener('mouseup', (event) => event.target = function moveLeft() {
      if(leftPosition >= 1000) {
          clearInterval(time);
          time = setInterval(moveRight, 5);
      }
      else {
          leftPosition += 1;
          rocket.style.left = leftPosition+'px';
      }
  }))
  
  let bottomPosition = 1000;
  
    rocket.forEach(grab => grab.addEventListener('click', (event) =>
        event.target = function moveDown(){
      if(bottomPosition == 0){
          clearInterval(time);
          time = setInterval(moveUp, 1000);
      }
      else{
          bottomPosition -= 1;
          rocket.style.bottom = bottomPosition+'px';
      }
  }))
  
  let rightPosition = 1000;
  
  rocket.forEach(grab => grab.addEventListener('mousedown', (event) =>
    event.target = function moveRight() {
     if(rightPosition == 1000) {
         clearInterval(time);
         time = setInterval(moveLeft, 20);
     }
     else {
         rightPosition -= 1;
         rocket.style.left = rightPosition+'px';
     }
  }))
  
   let topPosition = 1000;
  
  function moveUp(){
    if(topPosition == 0) {
        clearInterval(time);
    }
    else{
        topPosition -= 1000;
        rocket.style.top = topPosition+'px';
    }
  }
};

moveRocket();