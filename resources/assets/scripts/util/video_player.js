import fontawesome from "@fortawesome/fontawesome";
//Interface Icons
import faPlay from "@fortawesome/fontawesome-pro-regular/faPlay";
import faPause from "@fortawesome/fontawesome-pro-regular/faPause";
import faExpand from "@fortawesome/fontawesome-pro-regular/faExpand";
import faVolumeUp from "@fortawesome/fontawesome-pro-regular/faVolumeUp";

fontawesome.library.add(faVolumeUp, faExpand, faPause, faPlay);

var VPlayer = {
  togglePlay(video) {
      if(video.paused) {
          video.play();
      } else {
          video.pause();
      }
  },
  updateButton(video, toggle) {
      let oldIcon = toggle.querySelector('svg');
      const icon = video.paused ? fontawesome.icon(faPlay).node[0] : fontawesome.icon(faPause).node[0];

      toggle.replaceChild(icon, oldIcon);
  },
  skip(video, button) {
      video.currentTime += parseFloat(button.dataset.skip);
  },
  handleRangeUpdate(video, range) {
      video[range.name] = range.value;
  },
  handleProgress(video, progressBar, video_time) {
    const minutes = parseInt(video.currentTime / 60, 10);
    const seconds = parseInt(video.currentTime % 60, 10);

    if(video_time) {
      video_time.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    }

    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
  },
  scrubVideo(e, progress, video) {
      const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
      video.currentTime = scrubTime;
  },
  toggleFullscreen(e) {
    const player = e.currentTarget.closest('.player');
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
      if (player.requestFullscreen) {
        player.requestFullscreen();
      } else if (player.msRequestFullscreen) {
        player.msRequestFullscreen();
      } else if (player.mozRequestFullScreen) {
        player.mozRequestFullScreen();
      } else if (player.webkitRequestFullscreen) {
        player.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  },
};

export default VPlayer;
