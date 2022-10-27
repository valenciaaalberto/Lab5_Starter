// expose.js
const jsConfetti = new JSConfetti();
window.addEventListener('DOMContentLoaded', init);
let audio = new Audio("assets/audio/air-horn.mp3");
function init() {
  const selectButton = document.getElementsByTagName("button")[0];
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
      jsConfetti.addConfetti();
    }
  });

  function displayImg(imagePath){
    const resultForImage = document.getElementsByTagName("img")[0];
    resultForImage.src = imagePath;
  }


  //maybe volume or volume-control
  const volumeControl = document.getElementById('volume');
  volumeControl.addEventListener('input', (event) => {
    //tried value, volume, step, range,min,max
    if(event.target.value == 0){
      displaySoundImg("assets/icons/volume-level-0.svg")
      audio.volume = event.target.value/100;
    }else if(event.target.value > 0 && event.target.value < 33){
      displaySoundImg("assets/icons/volume-level-1.svg")
      audio.volume = event.target.value/100;
    }else if(event.target.value >= 33 && event.target.value < 67){
      displaySoundImg("assets/icons/volume-level-2.svg")
      audio.volume = event.target.value/100;
    }else if(event.target.value > 67){
      displaySoundImg("assets/icons/volume-level-3.svg")
      audio.volume = event.target.value/100;
    }
  });

  function displaySoundImg(imagePath){
    const audioImage = document.getElementsByTagName("img")[1];
    audioImage.src = imagePath;
  }
  
}

