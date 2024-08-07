import Swiper from "swiper";

export function createSliderThumbs(className: string) {
  return new Swiper(`.${className}`, {
    spaceBetween: 0,
    slidesPerView: 3,
    watchSlidesProgress: true,
    allowTouchMove: false,
  });
}
