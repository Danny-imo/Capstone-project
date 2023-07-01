const hambugger = document.querySelector('.ham');
const nav = document.querySelector('.buger');
const close = document.querySelector('.closeBtn');

hambugger.addEventListener('click', () => {
  nav.style.display = 'block';
});

close.addEventListener('click', () => {
  nav.style.display = 'none';
});

const hidden = document.querySelectorAll('.hidden');
const moreBtn = document.querySelector('.more-btn');
const lessBtn = document.querySelector('.less-btn');

moreBtn.addEventListener('click', () => {
  hidden.forEach((hide) => {
    hide.style.display = 'block';
  });
  moreBtn.style.display = 'none';
  lessBtn.style.display = 'block';
});

lessBtn.addEventListener('click', () => {
  hidden.forEach((hide) => {
    hide.style.display = 'none';
  });
  lessBtn.style.display = 'none';
  moreBtn.style.display = 'block';
});