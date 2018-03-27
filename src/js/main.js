;
(() => {
    'use strict';

    /*variables*/

    const Parallax = require('scroll-parallax');
    let p = new Parallax('.parallax', {
        intensity: 40
    }).init();

    let video = document.querySelector('video');
    let playBtn = document.querySelector('.play_video');
    let stopBtn = document.querySelector('.stop_video');
    let playVideo = document.querySelector('.video_elem');
    let videoFade = document.querySelector('.video_fade');
    let fadeEl = document.querySelector('.fade_el');
    playBtn.addEventListener('click', () => {
        play();
        playVideo.classList.add('active');
        videoFade.classList.add('active');
        fadeEl.classList.add('active');
    });
    stopBtn.addEventListener('click', () => {
        pause();
        playVideo.classList.remove('active');
        videoFade.classList.remove('active');
        fadeEl.classList.remove('active');
    });

    function play() {
        video.play();
    }

    function pause() {
        video.pause();
    }

})();
