
var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    
    this.style.color = "white"

  })

}











  //  //play souond when button is clicked
  //  var audio = new Audio("sounds/crash.mp3");
  //  audio.play();