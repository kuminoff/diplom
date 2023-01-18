"use strict";

import Swiper, { Navigation } from "swiper";

const sliders = () => {
  const swiperClients = new Swiper(".swiper", {
    modules: [Navigation],
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".benefits__arrow--right",
      prevEl: ".benefits__arrow--left ",
    },
  });

  const swiperServices = new Swiper(".swiper-services", {
    modules: [Navigation],
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".services__arrow--right",
      prevEl: ".services__arrow--left ",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },

      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },
  });
};

export default sliders;
