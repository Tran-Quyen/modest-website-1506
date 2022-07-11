const navSlider = () => {
  const btn = document.querySelector('.menu-btn');
  const nav = document.querySelector('header .nav-lists');

  btn.addEventListener('click', () => {
    nav.classList.toggle('active-slider');
  });
};

navSlider();
