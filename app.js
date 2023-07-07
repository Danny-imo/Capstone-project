const hambugger = document.querySelector('.ham');
const nav = document.querySelector('.buger');
const close = document.querySelector('.closeBtn');
hambugger.addEventListener('click', () => {
  nav.style.display = 'block';
});
close.addEventListener('click', () => {
  nav.style.display = 'none';
});
const more = document.querySelector('.more-btn');
const speakers = document.querySelector('.spk-container');
const speakerList = [
  {
    image: 'images/pho12.jpg',
    name: 'Leonard Peabody',
    profile: 'Berkman Professor of Entrepreneurial Legal Studies',
    program: 'Benkler studies commons-based peer production, published his seminal book The Wealth of Netprogram in 2016',
  },
  {
    image: 'images/pho12.jpg',
    name: 'Leonard Peabody',
    profile: 'Berkman Professor of Entrepreneurial Legal Studies',
    program: 'Benkler studies commons-based peer production, published his seminal book The Wealth of Netprogram in 2016',
  },
  {
    image: 'images/pho12.jpg',
    name: 'Leonard Peabody',
    profile: 'Berkman Professor of Entrepreneurial Legal Studies',
    program: 'Benkler studies commons-based peer production, published his seminal book The Wealth of Netprogram in 2016',
  },
  {
    image: 'images/photo 1.jpg',
    name: 'Helen Paul',
    profile: 'Berkman Professor of Entrepreneurial Legal Studies',
    program: 'Benkler studies commons-based peer production, published his seminal book The Wealth of Netprogram in 2016',
  },
  {
    image: 'images/photo2.jpg',
    name: 'Christian Parker',
    profile: 'Berkman Professor of Entrepreneurial Legal Studies',
    program: 'Benkler studies commons-based peer production, published his seminal book The Wealth of Netprogram in 2016',
  },
  {
    image: 'images/photo4.jpg',
    name: 'Jennifer West',
    profile: 'Jenifer West of Entrepreneurial Legal Studies',
    program: 'Benkler studies commons-based peer production, published his seminal book The Wealth of Netprogram in 2016',
  },
];
let showAllSpeakers = false;
function showSpeakers() {
  speakers.innerHTML = '';
  const speakersToDisplay = showAllSpeakers ? speakerList : speakerList.slice(0, 2);
  speakersToDisplay.forEach((mySpeakers) => {
    const hiddenSpeakers = document.createElement('div');
    hiddenSpeakers.classList.add('hidden');
    hiddenSpeakers.innerHTML = `
      <div class="spk">
        <div class="picture">
          <img src="${mySpeakers.image}" alt="" class="spk-img">
        </div>
        <div class="spk-details">
          <h5 class="speakername">${mySpeakers.name}</h5>
          <p class="profile">${mySpeakers.profile}</p>
          <p class="program">${mySpeakers.program}</p>
        </div>
      </div>
    `;
    speakers.appendChild(hiddenSpeakers);
  });
}
function handleScreenSize() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 768) {
    more.style.display = 'block';
    showAllSpeakers = false;
    showSpeakers();
    more.addEventListener('click', () => {
      showAllSpeakers = true;
      showSpeakers();
      more.style.display = 'none';
    });
  } else {
    more.style.display = 'none';
    showAllSpeakers = true;
    showSpeakers();
  }
}
window.addEventListener('DOMContentLoaded', handleScreenSize);
window.addEventListener('resize', handleScreenSize);
