import './guiseek'

import './style.scss'


const audio = document.querySelector('audio')!;
const form = document.querySelector('form')!;
const volumeControl = document.querySelector('input')!;
const volumeValue = document.querySelector('output')!;


function changeVolume(value: number) {
  audio.volume = value / 100;
  volumeValue.innerHTML = `${value}`;
}


changeVolume(volumeControl.valueAsNumber);

volumeControl.oninput = () => changeVolume(volumeControl.valueAsNumber);

form.onreset = () => changeVolume(50);
