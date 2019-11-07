import './sass/main.scss';

import Swiper from 'swiper';

const refs = {
    toogleBtn: document.querySelector('.toggle__btn'),
    sidebar: document.querySelector('.header__sidebar'),
    hamburgerBtn: document.querySelector('.hamburger'),
}

const openMenu = () => {
    refs.sidebar.classList.toggle('active');
    refs.hamburgerBtn.classList.toggle('is-active');
    refs.toogleBtn.classList.toggle('swiped')
}

refs.toogleBtn.addEventListener('click', openMenu);

var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    speed: 500,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })