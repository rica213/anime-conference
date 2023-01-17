const more = document.querySelector('.more');
const less = document.querySelector('.less');
const guests = [
  {
    id: '1',
    speakerName: 'Makima',
    title: 'Demon Hunters',
    experience: 'She is a ruthless and manipulative character. And we love her for that, I mean who does not love a cat?',
    headshot: 'img/Makima_headshot.jpg',
  },
  {
    id: '2',
    speakerName: 'Daiki Aomine',
    title: 'Basketball player',
    experience: 'Aomine is a character from KNB. He is part of the Generation of Miracles and has one of the biggest ego.',
    headshot: 'img/aomine-daiki-blue.png',
  },
  {
    id: '3',
    speakerName: 'Usopp',
    title: 'Sailor',
    experience: 'He is a member of the strawhat crew. He is incredibly inventive. He is well known by his big nose and his lies.',
    headshot: 'img/usopp.png',
  },
  {
    id: '4',
    speakerName: 'Asta',
    title: 'Sword fighter',
    experience: 'He is the main character in the Black Cover alongside Yuno. He is known by his strong will to never give up',
    headshot: 'img/asta.jpg',
  },
  {
    id: '5',
    speakerName: 'Ymir',
    title: 'Sword fighter',
    experience: 'She is a badass!',
    headshot: 'img/ymir.jpg',
  },
  {
    id: '6',
    speakerName: 'Kagura',
    title: 'Magic user',
    experience: 'I mean, why not add more badass girl in the stack!',
    headshot: 'img/Kagura-3-kagura-mikazuchi-fairy-tail.jpg',
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
      <h4 class="name fw-bold mb-0">${guest.speakerName}</h4>
      <small class="title fst-italic">${guest.title}</small>
      <span class="line-secondary mt-1 mb-2"></span>
      <p class="experience pe-5">${guest.experience}</p>
    </div>
    `;

    ul.appendChild(li);
  });
};

window.onload = () => {
  loadGuests();
};

more.addEventListener('click', () => {
  const li = document.getElementsByClassName('guest');
  for (let i = 0; i < li.length; i += 1) {
    li[i].setAttribute('class', 'guest col-md-5 mt-3 d-flex');
  }
  more.className = 'd-none';
  less.className = 'btn btn-outline-dark p-3 rounded-0 fw-bold mx-auto text-uppercase d-md-none w-50 less';
});

less.addEventListener('click', () => {
  const li = document.getElementsByClassName('guest');
  for (let i = 2; i < li.length; i += 1) {
    li[i].setAttribute('class', 'guest d-none');
  }

  less.className = 'd-none';
  more.className = 'btn btn-outline-dark p-3 rounded-0 fw-bold mx-auto text-uppercase d-md-none w-50 less';
});
