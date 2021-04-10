var kickSound;
var clapSound;
var hihatSound;
var openhatSound;
var tinkSound;
var tomSound;
var rideSound;
var snareSound;
var boomSound;
var channel1 = [];
appStart();
function appStart() {
    document.addEventListener('keypress', onKeyPress);
    var btnPlayChannel1 = document.querySelector('#playChannel1');
    btnPlayChannel1.addEventListener('click', onPlayChannel1);
    getAudioElements();
}
function onPlayChannel1() {
    channel1.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
}
function getAudioElements() {
    kickSound = document.querySelector('[data-sound="kick"]');
    clapSound = document.querySelector('[data-sound="clap"]');
    hihatSound = document.querySelector('[data-sound="hihat"]');
    openhatSound = document.querySelector('[data-sound="openhat"]');
    tinkSound = document.querySelector('[data-sound="tink"]');
    tomSound = document.querySelector('[data-sound="tom"]');
    rideSound = document.querySelector('[data-sound="ride"]');
    snareSound = document.querySelector('[data-sound="snare"]');
    boomSound = document.querySelector('[data-sound="boom"]');
}
function onKeyPress(ev) {
    var key = ev.key;
    var time = ev.timeStamp;
    channel1.push({ key: key, time: time });
    playSound(key);
    console.log(channel1);
}
function playSound(key) {
    switch (key) {
        case 'a':
            kickSound.currentTime = 0;
            kickSound.play();
            break;
        case 's':
            clapSound.currentTime = 0;
            clapSound.play();
            break;
        case 'd':
            hihatSound.currentTime = 0;
            hihatSound.play();
            break;
        case 'q':
            openhatSound.currentTime = 0;
            openhatSound.play();
            break;
        case 'w':
            tinkSound.currentTime = 0;
            tinkSound.play();
            break;
        case 'e':
            tomSound.currentTime = 0;
            tomSound.play();
            break;
        case 'z':
            rideSound.currentTime = 0;
            rideSound.play();
            break;
        case 'x':
            snareSound.currentTime = 0;
            snareSound.play();
            break;
        case 'c':
            boomSound.currentTime = 0;
            boomSound.play();
            break;
    }
}
