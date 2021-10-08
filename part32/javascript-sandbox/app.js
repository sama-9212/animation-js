const badge = document.querySelector(".badge");

const speed = 250;
const badgeMax = 25;
let count = 0;
updateBadge();

badge.addEventListener("click", increaseCount);

function increaseCount() {
	count++;
	updateBadge();
}

function updateBadge() {
	badge.classList.add("animate");
	setTimeout(() => {
		badge.innerText = count <= badgeMax ? count : `${badgeMax}+`;
		badge.title = `You have ${count} new messages`;
		setTimeout(() => {
			badge.classList.remove("animate");
		}, speed);
	}, speed);
}
const clickMe = document.querySelector(".clickMe");
const stopBtn = document.querySelector(".stop");

const cube = document.querySelector(".cube");

clickMe.addEventListener("click", move);
stopBtn.addEventListener("click", stop);

function move() {
const cube = document.querySelector(".cube");

cube.classList.remove('two','three','fore','five','six','one');
cube.classList.add('move_cube');

}
const circle = document.querySelector(".circle");


function stop() {
const randomNumber = Math.floor(Math.random() * 7);
cube.classList.add('move_cube');

  console.log(randomNumber)
    cube.classList.remove('move_cube','two','three','fore','five','six','one');
    if(randomNumber == 2 || randomNumber == 0 ){
      cube.classList.add('fore');

    //  setTimeout( (alert("Congratulations you won !!!")), 3000)


    }else{
      if(randomNumber == 3){
        cube.classList.add('two');
  
      } 
      else{
        if(randomNumber == 4){
          circle.classList.add('shadow-cu');

          cube.classList.add('six');
          

    
        } 
        else{
          if(randomNumber == 5){
            cube.classList.add('five');
      
          } 
          else{
            if(randomNumber == 6 ){
              cube.classList.add('three');
        
            } 
            else{
              if(randomNumber == 1){
                cube.classList.add('one');
          
              } 
        
    }
  }
}}}}
 

  
        


