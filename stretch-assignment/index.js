function moveRocket() {
  let leftPosition = 0; 
  let rocket = document.querySelector('.block');
  let time = setInterval(moveLeft, 10);

  function moveLeft() {
      if(leftPosition >= 150) {
          clearInterval(time);
          time = setInterval(moveDown, 5);
      }
      else {
          leftPosition += 1;
          rocket.style.left = leftPosition+'px';
      }
  }
  
  bottomPosition = 1000;
  
  function moveDown(){
      if(bottomPosition == 0){
          clearInterval(time);
          time = setInterval(moveRight, 10);
      }
      else{
          bottomPosition -= 1;
          rocket.style.bottom = bottomPosition+'px';
      }
  }
  
  let rightPosition = 1000;
  
  function moveRight() {
     if(rightPosition == 0) {
         clearInterval(time);
         time = setInterval(moveUp, 20);
     }
     else {
         rightPosition -= 1;
         rocket.style.left = rightPosition+'px';
     }
  }
  
   let topPosition = 1000;
  
  function moveUp(){
      if(topPosition == 0) {
         clearInterval(time);
      }
      else{
         topPosition -= 1;
         rocket.style.top = topPosition+'px';
      }
  }
};