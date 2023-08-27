document.addEventListener('keydown', function (e) {
    const keyCode = e.keyCode;
    const keyElement = document.getElementById(`key-${keyCode}`);
    if (keyElement) {
        keyElement.style.borderColor = '#ffc600';
        keyElement.style.transform = 'scale(1.1)';
        keyElement.style.boxShadow = '0 0 1rem #ffc600';
    }

    const sounds = {
        65: 'sound/clap.wav',
        83: 'sound/hihat.wav',
        68: 'sound/kick.wav',
        70: 'sound/openhat.wav',
        71: 'sound/boom.wav',
        72: 'sound/ride.wav',
        74: 'sound/snare.wav',
        75: 'sound/tom.wav',
        76: 'sound/tink.wav'
    };

    if (sounds[keyCode]) {
        playSound(sounds[keyCode]);
    }
});

document.addEventListener('keyup', function (e) {
    const keyCode = e.keyCode;
    const keyElement = document.getElementById(`key-${keyCode}`);
    if (keyElement) {
        keyElement.style.borderColor = '';
        keyElement.style.transform = '';
        keyElement.style.boxShadow = '';
    }
});

function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
}