import Vimeo from '@vimeo/player';
console.log(Vimeo);


const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

let playData;

player.on('play', onPlay);


function onPlay(data) {
    //console.log(data);
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));

    const savedTime = localStorage.getItem('videoplayer-current-time');


    console.log(savedTime);

    //const parsSavedTime = JSON.parse(savedTime);

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
