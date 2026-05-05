const videos = document.querySelectorAll(".gallery video");

// Pause when video leaves screen
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const video = entry.target;

    // Pause if less than 20% visible
    if (entry.intersectionRatio < 0.5) {
      video.pause();
    }
  });
}, {
  threshold: [0, 0.2, 0.5, 1]
});

// Apply observer + control logic
videos.forEach(video => {
  observer.observe(video);

  // Pause all other videos when one plays
  video.addEventListener("play", () => {
    videos.forEach(v => {
      if (v !== video) v.pause();
    });
  });
});
