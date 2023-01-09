window.matchMedia("(min-width: 768px)").addEventListener('change', () => {
  document.querySelector('.nav-top').classList.remove('d-none');
});

window.matchMedia("(max-width: 767px)").addEventListener('change', () => {
  document.querySelector('.nav-top').classList.add('d-none');
});