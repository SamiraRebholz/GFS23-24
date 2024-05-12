function showVideo(videoSource) {
  const videoModal = document.getElementById('videoModal');
  const video = document.getElementById('video');
  video.src = videoSource;
  videoModal.style.display = 'flex';
}

function hideVideo() {
  const videoModal = document.getElementById('videoModal');
  const video = document.getElementById('video');
  video.pause(); // Pause the video before hiding
  videoModal.style.display = 'none';
}

function openVideoModal(videoSource) {
  showVideo(videoSource);
}