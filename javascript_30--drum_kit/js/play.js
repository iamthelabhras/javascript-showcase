// Declare global variables.

const keys = document.querySelectorAll('.key');

// Declare global functions.

function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if(!audio) return; // stop the function from running altogether 
        audio.currentTime = 0; // rewind to start on event
        audio.play();
        key.classList.add('playing');  
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

// Add Event Listeners

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound); 

