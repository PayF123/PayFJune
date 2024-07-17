//const navbar = document.querySelector('.navbar');
const navbar = document.querySelector('.eekdwa92');

window.addEventListener('scroll', () => {
  const isScrolled = window.scrollY > 0;
  navbar.classList.toggle('is-sticky', isScrolled);
});
