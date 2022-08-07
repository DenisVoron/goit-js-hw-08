import Vimeo from '@vimeo/player';

console.log(Vimeo);

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('play', function (time) {
    console.log('played the video!');
    console.log(time);
});

player.getVideoTitle().then(function (title) {
    console.log('title:', title);
});

//player.getVideoTime