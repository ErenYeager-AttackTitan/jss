// script.js
$(document).ready(function() {
    const video = $('#video')[0];
    const playPauseButton = $('#play-pause');
    const seekBar = $('#seek-bar');
    const currentTimeDisplay = $('#current-time');
    const durationDisplay = $('#duration');

    playPauseButton.on('click', function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

    video.addEventListener('timeupdate', function() {
        const percent = (video.currentTime / video.duration) * 100;
        seekBar.val(percent);
        currentTimeDisplay.text(formatTime(video.currentTime));
        durationDisplay.text(formatTime(video.duration));
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
});
