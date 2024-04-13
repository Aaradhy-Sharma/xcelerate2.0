// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Background Video Fade
const backgroundVideo = document.querySelector('.background-video');
const detailsSection = document.querySelector('.details-section');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const detailsSectionPosition = detailsSection.offsetTop;

  if (scrollPosition >= detailsSectionPosition - 200) {
    backgroundVideo.classList.add('faded');
  } else {
    backgroundVideo.classList.remove('faded');
  }
});