// expose.js

window.addEventListener('DOMContentLoaded', init);
let audio = new Audio("assets/audio/air-horn.mp3");
function init() {
  const selectButton = document.getElementById('soundButton');
      selectButton.addEventListener('click', () =>{
      audio.play();
  });

  const selectElement = document.getElementById('horn-select');
  selectElement.addEventListener('change', (event) => {
    if(event.target.value == "air-horn"){
      displayImg("assets/images/air-horn.svg");
    }else if(event.target.value == "car-horn"){
      displayImg("assets/images/car-horn.svg")
      audio = new Audio("assets/audio/car-horn.mp3");
    }else if(event.target.value == "party-horn"){
      displayImg("assets/images/party-horn.svg")
      audio = new Audio("assets/audio/party-horn.mp3");
    }
  });

  function displayImg(imagePath){
    const resultForImage = document.getElementById("selectedimg");
    resultForImage.src = imagePath;
  }
  
}

