const swiper1 = new Swiper('.business-swiper', {
  slidesPerView: 5,
  spaceBetween: 20,
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
});

const swiper2 = new Swiper('.cases-swiper', {
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: '.cases-button-next',
    prevEl: '.cases-button-prev',
  },
});

const swiper3 = new Swiper('.team-swiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: '.team-button-next',
    prevEl: '.team-button-prev',
  },
});
