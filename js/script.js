const desktopSize = window.matchMedia('(min-width: 768px)');
const body = document.querySelector('body');

body.onload = (e) => {
  if (desktopSize.matches) {
    document.querySelector('.nav-top').classList.remove('d-none');
} else {
  document.querySelector('.nav-top').classList.add('d-none');
}
}

desktopSize.onchange = (e) => {
    if (e.matches) {
      document.querySelector('.nav-top').classList.remove('d-none');
  } else {
    document.querySelector('.nav-top').classList.add('d-none');
  }
}
