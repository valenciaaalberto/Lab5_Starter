// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
const synth = window.speechSynthesis;
const inputTxt = document.getElementById('text-to-speak');
const voiceSelect = document.getElementById('voice-select');
const faceImg = document.getElementsByTagName("img")[0];

let voices = [];

function populateVoiceList() {
  voices = synth.getVoices();
  for (let i = 0; i < voices.length ; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    if (voices[i].default) {
      option.textContent += ' — DEFAULT';
    }
    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}

populateVoiceList();
function displayCorrImg(){
  if(synth.speaking){
    faceImg.src = "assets/images/smiling-open.png";
  }else{
    faceImg.src = "assets/images/smiling.png";
  }  
}

setInterval(displayCorrImg);

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  document.getElementsByTagName("button")[0].addEventListener('click',(event) =>{
    event.preventDefault();
    console.log(inputTxt.value);
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);
    faceImg.src = "assets/images/smiling-open.png";
    inputTxt.blur();
  });
 
  
}