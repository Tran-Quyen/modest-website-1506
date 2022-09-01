const navSlider = () => {
  const btn = document.querySelector('.menu-btn');
  const nav = document.querySelector('header .nav-lists');
  const navLink = document.querySelectorAll('.nav-lists>li');
  btn.addEventListener('click', () => {
    //Toggle nav
    nav.classList.toggle('active-slider');
    
    //Animate Link
    navLink.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        console.log(index);
        link.style.animation = `navLinkFade 0.1s ease forwards ${index / 7 +2}s`;
      }
    });
  });
};

navSlider();