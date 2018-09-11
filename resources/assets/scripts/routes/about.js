import VPlayer from '../util/video_player';

export default {
  init() {
    // JavaScript to be fired on the about page
    const players = document.querySelectorAll('.player');

    players.forEach( player => {
      const video = player.querySelector('.viewer');
      const toggle = player.querySelector('.toggle');

      const video_time = player.querySelector('.duration');
      const progress = player.querySelector('.progress');
      const progressBar = player.querySelector('.progress__filled');
      const skip_buttons = player.querySelectorAll('[data-skip]');
      const ranges = player.querySelectorAll('.player__slider');
      const fullscreenButton = player.querySelector('.fullscreen');

      var i = setInterval(function() {
        if(video.readyState > 0) {
          var minutes = parseInt(video.duration / 60, 10);
          var seconds = parseInt(video.duration % 60, 10);

          if(video_time) {
            video_time.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
          }

          clearInterval(i);
        }
      }, 200);

      video.addEventListener('click', () => VPlayer.togglePlay(video) );
      video.addEventListener('play', () => VPlayer.updateButton(video, toggle));
      video.addEventListener('pause', () => VPlayer.updateButton(video, toggle));
      video.addEventListener('timeupdate', () => VPlayer.handleProgress(video, progressBar, video_time));

      toggle.addEventListener('click', () => { VPlayer.togglePlay(video) });

      skip_buttons.forEach(button => button.addEventListener('click', () => VPlayer.skip(video, button)));

      fullscreenButton.addEventListener('click', (e) => VPlayer.toggleFullscreen(e, fullscreenButton));

      ranges.forEach(range => range.addEventListener('change', () => VPlayer.handleRangeUpdate(video, range)));
      ranges.forEach(range => range.addEventListener('mousemove', () => VPlayer.handleRangeUpdate(video, range)));

      let mousedown = false;
      progress.addEventListener('click', (e, progress, video) => VPlayer.scrubVideo(e, progress, video));
      progress.addEventListener('mousemove', (e, progress, video) => mousedown && VPlayer.scrubVideo(e, progress, video));
      progress.addEventListener('mousedown', () => mousedown = true);
      progress.addEventListener('mouseup', () => mousedown = false);
    });
  },
};
