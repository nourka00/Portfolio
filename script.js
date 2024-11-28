document.getElementById('copy-btn').addEventListener('click', () => {
    const email = document.getElementById('email-text').textContent;
    navigator.clipboard.writeText(email).then(() => {
      alert('Email copied to clipboard!');
    });
  });
  
  const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function moveCarousel() {
  currentIndex++;
  if (currentIndex > items.length - 4) { // Reset if we're at the last set of visible items
    currentIndex = 0;
  }
  track.style.transform = `translateX(-${currentIndex * 25}%)`; // Slide by 25% for each item
}

setInterval(moveCarousel, 3000); // Adjust the time interval as needed