const hambugger = document.querySelector('.ham');
const nav = document.querySelector('.buger');
const close = document.querySelector('.closeBtn');

hambugger.addEventListener('click', () => {
  nav.style.display = 'block';
});

close.addEventListener('click', () => {
  nav.style.display = 'none';
});