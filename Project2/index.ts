let kickSound: HTMLAudioElement;
let clapSound: HTMLAudioElement;
let hihatSound: HTMLAudioElement;
let openhatSound: HTMLAudioElement;
let tinkSound: HTMLAudioElement;
let tomSound: HTMLAudioElement;
let rideSound: HTMLAudioElement;
let snareSound: HTMLAudioElement;
let boomSound: HTMLAudioElement;

const channel1: any[] = [];
const channel2: any[] = [];
const channel3: any[] = [];
const channel4: any[] = [];

let ifRecord1: boolean = false;
let timeRecord1: number = 0;

let ifRecord2: boolean = false;
let timeRecord2: number = 0;

let ifRecord3: boolean = false;
let timeRecord3: number = 0;

let ifRecord4: boolean = false;
let timeRecord4: number = 0;

appStart();


function appStart() {

    document.addEventListener('keypress', onKeyPress);

    const btnPlayChannel1 = document.querySelector('#playChannel1')
    btnPlayChannel1.addEventListener('click', onPlayChannel1);
    const btnRecord1 = document.querySelector('#record1')
    btnRecord1.addEventListener('click', e => {
            ifRecord1 = true;
            timeRecord1 = e.timeStamp;
    } );

    const btnStop1 = document.querySelector('#stop1')
    btnStop1.addEventListener('click', e => {
        ifRecord1 = false;
} );

const btnPlayChannel2 = document.querySelector('#playChannel2')
btnPlayChannel2.addEventListener('click', onPlayChannel2);
const btnRecord2 = document.querySelector('#record2')
btnRecord2.addEventListener('click', e => {
        ifRecord2 = true;
        timeRecord2 = e.timeStamp;
} );

const btnStop2 = document.querySelector('#stop2')
btnStop2.addEventListener('click', e => {
    ifRecord2 = false;
} );

const btnPlayChannel3 = document.querySelector('#playChannel3')
btnPlayChannel3.addEventListener('click', onPlayChannel3);
const btnRecord3 = document.querySelector('#record3')
btnRecord3.addEventListener('click', e => {
        ifRecord3 = true;
        timeRecord3 = e.timeStamp;
} );

const btnStop3 = document.querySelector('#stop3')
btnStop3.addEventListener('click', e => {
    ifRecord3 = false;
} );

    const btnPlayChannel4 = document.querySelector('#playChannel4')
    btnPlayChannel4.addEventListener('click', onPlayChannel4);
    const btnRecord4 = document.querySelector('#record4')
    btnRecord4.addEventListener('click', e => {
            ifRecord4 = true;
            timeRecord4 = e.timeStamp;
    } );

    const btnStop4 = document.querySelector('#stop4')
    btnStop4.addEventListener('click', e => {
        ifRecord4 = false;
} );

    getAudioElements();
}


function onPlayChannel1(): void {
    channel1.forEach(sound => {
        setTimeout( () => playSound(sound.key), sound.newTime);
    });
}

function onPlayChannel2(): void {
    channel2.forEach(sound => {
        setTimeout( () => playSound(sound.key), sound.newTime);
    });
}

function onPlayChannel3(): void {
    channel3.forEach(sound => {
        setTimeout( () => playSound(sound.key), sound.newTime);
    });
}

function onPlayChannel4(): void {
    channel4.forEach(sound => {
        setTimeout( () => playSound(sound.key), sound.newTime);
    });
}



function getAudioElements(): void {
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

function onKeyPress(ev: KeyboardEvent): void {
    const key = ev.key;
    const time = ev.timeStamp;

    playSound(key);
    record(key, time);
    console.log(channel1);
}

function record(key, time) {
    if( ifRecord1 ) {
        const newTime = time - timeRecord1;
        channel1.push({key,newTime});
        console.log(channel1);
    }

    if( ifRecord2 ) {
        const newTime = time - timeRecord2;
        channel2.push({key,newTime});
        console.log(channel1);
    }

    if( ifRecord3 ) {
        const newTime = time - timeRecord3;
        channel3.push({key,newTime});
        console.log(channel1);
    }

    if( ifRecord4 ) {
        const newTime = time - timeRecord4;
        channel4.push({key,newTime});
        console.log(channel1);
    }


}

function playSound(key: string) {
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