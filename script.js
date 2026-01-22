const carousel = document.querySelector('.carousel');
const panels = document.querySelectorAll('.panel');
const total = panels.length;
let angle = 0;

document.getElementById('next').onclick = () => {
  angle -= 360 / total;
  carousel.style.transform = `rotateY(${angle}deg)`;
};

document.getElementById('prev').onclick = () => {
  angle += 360 / total;
  carousel.style.transform = `rotateY(${angle}deg)`;
};
