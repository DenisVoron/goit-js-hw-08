import Vimeo from '@vimeo/player';
console.log(Vimeo);


const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

let playData = null;

player.on('play', onPlay);


//populateTimeValue()

function onPlay(data) {
    //console.log(data);
    //console.log(FormData);
    //const objectPlay = JSON.stringify(data);
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));

    const savedTime = localStorage.getItem('videoplayer-current-time');

    const parsSavedTime = JSON.parse(savedTime);
    //console.log(parsSavedTime);
    //console.log(parsSavedTime.seconds);
    //playData = parsSavedTime;

    if (parsSavedTime) {
        //playData = getParsTime.seconds;
        player.setCurrentTime(parsSavedTime.seconds);
        console.log(parsSavedTime.seconds);
    }

    //console.log(playData);
    //player.setCurrentTime(playData);
    //console.log(objectData);
}
//console.log(playData);


/*player.setCurrentTime(playData).then(function (seconds) {
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
});;
//console.log(playData);

/*function populateTimeValue() {
    const getSavedTime = localStorage.getItem('videoplayer-current-time');
    const getParsTime = JSON.parse(getSavedTime);
    console.log(getParsTime);

    if (getParsTime) {
        player.setCurrentTime(getParsTime.seconds);
    }
}

/*const getSavedTime = localStorage.getItem('videoplayer-current-time');

if (getSavedTime) {
    player.setCurrentTime(getSavedTime);
}*/



/*player.setCurrentTime(playData).then(function (seconds) {
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
});*/


/*function returnTimeData() {
    const savedTime = localStorage.getItem('time');

    const parsSavedTime = JSON.parse(savedTime);
    console.log(parsSavedTime);

    PlayData = parsSavedTime;
}*/
