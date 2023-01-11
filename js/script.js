const moreOrLess = document.querySelector('.more-or-less');
const guests = [
  {
    id: '1',
    speakerName: 'Makima',
    title: 'Demon Hunters',
    experience: 'She is a ruthless and manipulative character. And we love her for that, I mean who does not love a cat?',
    headshot: 'img/Makima_headshot.jpg'
  },
  {
    id: '2',
    speakerName: 'Daiki Aomine',
    title: 'Basketball player',
    experience: 'Aomine is a character from KNB. He is part of the Generation of Miracles and has one of the biggest ego.',
    headshot: 'img/aomine-daiki-blue.png'
  },
  {
    id: '3',
    speakerName: 'Usopp',
    title: 'Sailor',
    experience: 'He is a member of the strawhat crew. He is incredibly inventive. He is well known by his big nose and his lies.',
    headshot: 'img/usopp.png'
  },
  {
    id: '4',
    speakerName: 'Asta',
    title: 'Sword fighter',
    experience: 'He is the main character in the Black Cover alongside Yuno. He is known by his strong will to never give up',
    headshot: 'img/asta.jpg'
  },
  {
    id: '5',
    speakerName: 'Ymir',
    title: 'Sword fighter',
    experience: 'She is a badass!',
    headshot: 'img/ymir.jpg'
  },
  {
    id: '6',
    speakerName: 'Kagura',
    title: 'Magic user',
    experience: 'I mean, why not add more badass girl in the stack!',
    headshot: 'img/Kagura-3-kagura-mikazuchi-fairy-tail.jpg'
  },
];

const loadGuests = () => {
  const ul = document.querySelector('#guest ul');
  ul.innerHTML = '';
  guests.forEach((guest) => {
    const li = document.createElement('li');
    if (guest.id === '1' || guest.id === '2') {
      li.className = 'guest col-md-5 mt-3 d-flex';
    } else {
      li.className = 'guest col-md-5 mt-3 d-none d-md-flex';
    }

    li.innerHTML = `
    <div class="headshot">
      <img src="${guest.headshot}" alt="headshot of ${guest.speakerName}">
    </div>
    <div class="resume ms-3 d-flex flex-column">
      <h3 class="name fw-bold">${guest.speakerName}</h3>
      <h4 class="title fst-italic">${guest.title}</h4>
      <span class="line-secondary mt-1 mb-2"></span>
      <p class="experience">${guest.experience}</p>
    </div>
    `;
  
    ul.appendChild(li);
  });
};

window.onload = (event) => {
  loadGuests();
};
 
moreOrLess.addEventListener('click', () => {
  const li = document.getElementsByClassName('guest');
  for (let i = 0; i < li.length; i++) {
    li[i].setAttribute('class','guest col-md-5 mt-3 d-flex');
  }
  moreOrLess.className = 'd-none';
});
