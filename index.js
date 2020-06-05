for (var a = 0; a < document.querySelectorAll(".drum").length; a++) {

  document.querySelectorAll(".drum")[a].addEventListener("click", function() {

    var letter = this.innerHTML;
    makeSound(letter);
    animation(letter);


  }); //function that is executed upon button click

}


//adding keyboard events

document.addEventListener("keydown", function(event){

  makeSound(event.key);
  animation(event.key);


});


function makeSound(key){
  switch (key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio1 = new Audio("sounds/kick-bass.mp3");
      audio1.play();
      break;
    case "s":
      var audio2 = new Audio("sounds/snare.mp3");
      audio2.play();
      break;
    case "d":
      var audio3 = new Audio("sounds/tom-1.mp3");
      audio3.play();
      break;
    case "j":
      var audio4 = new Audio("sounds/tom-2.mp3");
      audio4.play();
      break;
    case "k":
      var audio5 = new Audio("sounds/tom-3.mp3");
      audio5.play();
      break;
    case "l":
      var audio6 = new Audio("sounds/tom-4.mp3");
      audio6.play();
      break;


    default:

  }
}


function animation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
