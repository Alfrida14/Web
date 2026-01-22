const carousel = document.querySelector('.carousel');
const panels = document.querySelectorAll('.panel');
const totalPanels = panels.length;

let currentIndex = 0;
let isScrolling = false;

function rotateCarousel() {
  const angle = 360 / totalPanels;
  carousel.style.transform = `rotateY(${-currentIndex * angle}deg)`;
}

window.addEventListener('wheel', (event) => {
  if (isScrolling) return;

  isScrolling = true;

  if (event.deltaY > 0) {
    // Scroll down → next
    currentIndex = (currentIndex + 1) % totalPanels;
  } else {
    // Scroll up → previous
    currentIndex = (currentIndex - 1 + totalPanels) % totalPanels;
  }

  rotateCarousel();

  setTimeout(() => {
    isScrolling = false;
  }, 900);
});
