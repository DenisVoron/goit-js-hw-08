var throttle = require('lodash.throttle');
import Vimeo from '@vimeo/player';
console.log(Vimeo);


const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

let playData = 0;

player.on('play', throttle(onPlay, 1000));


function onPlay(data) {
    console.log(data);
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));

    //const savedTime = localStorage.getItem('videoplayer-current-time');
    //console.log(savedTime);
}

populateTimeValue();

function populateTimeValue() {
    const getSavedTime = localStorage.getItem('videoplayer-current-time');
    const getParsTime = JSON.parse(getSavedTime);
    console.log(getParsTime);


    if (getParsTime) {
        playData = getParsTime.seconds;
    }
}

player.setCurrentTime(playData);
