import './guiseek'

import './style.scss'

const audio = document.querySelector('audio')!;

const form = document.querySelector('form')!;
const panControl = document.querySelector('input')!;
const panValue = document.querySelector('output')!;

audio.addEventListener('play', () => {
  const audioCtx = new AudioContext();
  const source = audioCtx.createMediaElementSource(audio);
  const panNode = audioCtx.createStereoPanner();

  panControl.oninput = () => changePan(panControl.valueAsNumber);
  form.onreset = () => changePan(0);

  function changePan(value: number) {
    panNode.pan.value = value;
    panValue.innerHTML = `${value}`;
  }


  /**
   * conecte o AudioBufferSourceNode ao gainNode e o
   * gainNode ao destino, para que possamos tocar a
   * música e ajustar o pan usando os controles
   */
  source.connect(panNode);
  panNode.connect(audioCtx.destination);
})