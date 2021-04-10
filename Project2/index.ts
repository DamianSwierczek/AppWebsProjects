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
appStart();

function appStart() {
    document.addEventListener('keypress', onKeyPress);
    const btnPlayChannel1 = document.querySelector('#playChannel1')
    btnPlayChannel1.addEventListener('click', onPlayChannel1);
    getAudioElements();
}
function onPlayChannel1(): void {
    channel1.forEach(sound => {
        setTimeout(() => playSound(sound.key), sound.time)
    })

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

    channel1.push({ key, time })

    playSound(key);
    console.log(channel1);
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