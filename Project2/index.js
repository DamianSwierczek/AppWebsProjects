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
var channel2 = [];
var channel3 = [];
var channel4 = [];
var ifRecord1 = false;
var timeRecord1 = 0;
var ifRecord2 = false;
var timeRecord2 = 0;
var ifRecord3 = false;
var timeRecord3 = 0;
var ifRecord4 = false;
var timeRecord4 = 0;
appStart();
function appStart() {
    document.addEventListener('keypress', onKeyPress);
    var btnPlayChannel1 = document.querySelector('#playChannel1');
    btnPlayChannel1.addEventListener('click', onPlayChannel1);
    var btnRecord1 = document.querySelector('#record1');
    btnRecord1.addEventListener('click', function (e) {
        ifRecord1 = true;
        timeRecord1 = e.timeStamp;
    });
    var btnStop1 = document.querySelector('#stop1');
    btnStop1.addEventListener('click', function (e) {
        ifRecord1 = false;
    });
    var btnPlayChannel2 = document.querySelector('#playChannel2');
    btnPlayChannel2.addEventListener('click', onPlayChannel2);
    var btnRecord2 = document.querySelector('#record2');
    btnRecord2.addEventListener('click', function (e) {
        ifRecord2 = true;
        timeRecord2 = e.timeStamp;
    });
    var btnStop2 = document.querySelector('#stop2');
    btnStop2.addEventListener('click', function (e) {
        ifRecord2 = false;
    });
    var btnPlayChannel3 = document.querySelector('#playChannel3');
    btnPlayChannel3.addEventListener('click', onPlayChannel3);
    var btnRecord3 = document.querySelector('#record3');
    btnRecord3.addEventListener('click', function (e) {
        ifRecord3 = true;
        timeRecord3 = e.timeStamp;
    });
    var btnStop3 = document.querySelector('#stop3');
    btnStop3.addEventListener('click', function (e) {
        ifRecord3 = false;
    });
    var btnPlayChannel4 = document.querySelector('#playChannel4');
    btnPlayChannel4.addEventListener('click', onPlayChannel4);
    var btnRecord4 = document.querySelector('#record4');
    btnRecord4.addEventListener('click', function (e) {
        ifRecord4 = true;
        timeRecord4 = e.timeStamp;
    });
    var btnStop4 = document.querySelector('#stop4');
    btnStop4.addEventListener('click', function (e) {
        ifRecord4 = false;
    });
    getAudioElements();
}
function onPlayChannel1() {
    channel1.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.newTime);
    });
}
function onPlayChannel2() {
    channel2.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.newTime);
    });
}
function onPlayChannel3() {
    channel3.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.newTime);
    });
}
function onPlayChannel4() {
    channel4.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.newTime);
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
    playSound(key);
    record(key, time);
    console.log(channel1);
}
function record(key, time) {
    if (ifRecord1) {
        var newTime = time - timeRecord1;
        channel1.push({ key: key, newTime: newTime });
        console.log(channel1);
    }
    if (ifRecord2) {
        var newTime = time - timeRecord2;
        channel2.push({ key: key, newTime: newTime });
        console.log(channel1);
    }
    if (ifRecord3) {
        var newTime = time - timeRecord3;
        channel3.push({ key: key, newTime: newTime });
        console.log(channel1);
    }
    if (ifRecord4) {
        var newTime = time - timeRecord4;
        channel4.push({ key: key, newTime: newTime });
        console.log(channel1);
    }
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
