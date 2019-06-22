function playSound (event) {
  const audio = document.querySelector(`audio[data-key = "${event.keyCode}"]`);
  const key =  document.querySelector(`.key[data-key = "${event.keyCode}"]`);

  if(!audio){ //if hit a key with no sound don't do anything
    return;
  }

  audio.currentTime = 0; //set audio to start of .wav file
  audio.play();
  key.classList.add('playing');

}

function removeTransition (event){
  if(event.propertyName !== 'transform'){
    return;
  }
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach( key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);