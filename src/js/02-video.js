import Vimeo from '@vimeo/player';
console.log(Vimeo);


const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

let playData;

player.on('play', onPlay);

function onPlay(data) {
    //console.log(data);
    //console.log(FormData);
    //const objectPlay = JSON.stringify(data);
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds));

    const savedTime = localStorage.getItem('videoplayer-current-time');

    const parsSavedTime = JSON.parse(savedTime);
    //console.log(parsSavedTime);

    playData = parsSavedTime;

    /*if (parsSavedTime) {
        playData = parsSavedTime;
    }*/


    //console.log(objectData);
}
console.log(playData);

player.setCurrentTime(playData).then(function (seconds) {
    // seconds = the actual time that the player seeked to
    console.log(seconds);
}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});


/*function returnTimeData() {
    const savedTime = localStorage.getItem('time');

    const parsSavedTime = JSON.parse(savedTime);
    console.log(parsSavedTime);

    PlayData = parsSavedTime;
}*/
