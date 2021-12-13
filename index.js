var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
      case "w":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

      case "a":
        var kickBass = new Audio("sounds/kick-bass.mp3");
        kickBass.play();
        break;
      case "s":
        var kickBass = new Audio("sounds/snare.mp3");
        kickBass.play();
        break;

      case "d":
        var kickBass = new Audio("sounds/tom-1.mp3");
        kickBass.play();
        break;
      case "j":
        var kickBass = new Audio("sounds/tom-2.mp3");
        kickBass.play();
        break;
      case "k":
        var kickBass = new Audio("sounds/tom-3.mp3");
        kickBass.play();
        break;

      case "l":
        var kickBass = new Audio("sounds/tom-4.mp3");
        kickBass.play();
        break;
      default:
    }

  })

}











//  //play souond when button is clicked
//  var audio = new Audio("sounds/crash.mp3");
//  audio.play();