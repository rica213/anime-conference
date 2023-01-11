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
  guests.forEach((guest) => {
    const li = document.createElement('li');
    li.classList.add('guest', 'col-md-5', 'mt-3');
    if(guest.id === '1' || guest.id ==='2'){
      li.classList.add('d-flex');
    } else {
      li.classList.add('d-none', 'd-md-flex');
    }
    ul.appendChild(li);
    const headshotWrapper = document.createElement('div');
    headshotWrapper.classList.add('headshot');
    li.appendChild(headshotWrapper);
    const headshotContent = document.createElement('img');
    headshotContent.src = guest.headshot;
    headshotWrapper.appendChild(headshotContent);
    const resume = document.createElement('div');
    resume.classList.add('resume', 'ms-3', 'd-flex', 'flex-column');
    li.appendChild(resume);
    const speakerName = document.createElement('div');
    speakerName.classList.add('name', 'fw-bold');
    speakerName.innerText = guest.speakerName;
    resume.appendChild(speakerName);
    const title = document.createElement('div');
    title.classList.add('title', 'fst-italic');
    title.innerText = guest.title;
    resume.appendChild(title);
    const lineSecondary = document.createElement('span');
    lineSecondary.classList.add('line-secondary');
    resume.appendChild(lineSecondary);
    const experience = document.createElement('experience');
    experience.classList.add('experience');
    experience.innerText = guest.experience;
    resume.appendChild(experience);
  });
};

window.onload = (event) => {
  loadGuests();
};

const li = document.querySelectorAll('.guest');
const loadMore = () => {
  guests.forEach((guest) => {
    if(guest.id !== '1' || guest.id !=='2'){
      li[guest.id - 1].classList.remove('d-none');
    }
  });
}

moreOrLess.addEventListener('click', loadMore);
