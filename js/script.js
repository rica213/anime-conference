const guests = [
  {
    id: '1',
    speakerName: 'Random name one',
    title: 'Random title',
    experience: 'Random things done by this person one',
    headshot: 'img/Makima_headshot.jpg'
  },
  {
    id: '2',
    speakerName: 'Random name two',
    title: 'Random title',
    experience: 'Random things done by this person two',
    headshot: 'img/Makima_headshot.jpg'
  },
  {
    id: '3',
    speakerName: 'Random name three',
    title: 'Random title',
    experience: 'Random things done by this person three',
    headshot: 'img/Makima_headshot.jpg'
  },
  {
    id: '4',
    speakerName: 'Random name four',
    title: 'Random title',
    experience: 'Random things done by this person four',
    headshot: 'img/Makima_headshot.jpg'
  },
  {
    id: '5',
    speakerName: 'Random name five',
    title: 'Random title',
    experience: 'Random things done by this person five',
    headshot: 'img/Makima_headshot.jpg'
  },
  {
    id: '6',
    speakerName: 'Random name six',
    title: 'Random title',
    experience: 'Random things done by this person six',
    headshot: 'img/Makima_headshot.jpg'
  },
];

const loadGuests = () => {
  const ul = document.querySelector('#guest ul');
  guests.forEach((guest) => {
    const li = document.createElement('li');
    li.classList.add('guest', 'col-md-5', 'mt-3');
    if(guest.id === '1' || guest.id ==='2'){
      li.classList.add('d-flex');
      console.log('1 ou 2');
    } else {
      li.classList.add('d-none', 'd-md-flex');
      console.log('les reste');
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