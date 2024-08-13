import { Swiper } from "swiper";
import { Navigation } from "swiper/modules";

export function createSliderOurAction(className: string) {
  return new Swiper(`.${className}`, {
    spaceBetween: 70,
    slidesPerView: 2,
    watchSlidesProgress: true,
    allowTouchMove: true,
    centeredSlides: true,
    modules: [Navigation],
    navigation: {
      nextEl: ".our_action__cards_swiper_btn_next",
      prevEl: ".our_action__cards_swiper_btn_prev",
    },
    speed: 400,
    freeMode: true,
    loop: true,
    breakpoints: {
      644: {
        spaceBetween: 70,
      },
      0: {
        spaceBetween: 30,
      },
    },
  });
}
