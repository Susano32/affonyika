import { Swiper } from "swiper";

export function createSliderMain(className: string) {
  return new Swiper(`.${className}`, {
    spaceBetween: 0,
    slidesPerView: 1,
    watchSlidesProgress: true,
    allowTouchMove: false,
    autoHeight: true,
    breakpoints: {
      720: {
        spaceBetween: 0,
        slidesPerView: 1,
        watchSlidesProgress: true,
        allowTouchMove: false,
        autoHeight: true,
      },
      0: {
        spaceBetween: 100,
      },
    },
  });
}
