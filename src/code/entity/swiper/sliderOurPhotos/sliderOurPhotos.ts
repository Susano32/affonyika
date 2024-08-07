import Swiper from "swiper";
import { Navigation } from "swiper/modules";

export function createSliderOurPhotos(className: string) {
  return new Swiper(`.${className}`, {
    spaceBetween: 15,
    slidesPerView: 5,
    loop: true,
    modules: [Navigation],
    freeMode: true,
    navigation: {
      nextEl: ".our_photos__slider_swiper_btn_next",
      prevEl: ".our_photos__slider_swiper_btn_prev",
    },
    speed: 400,
  });
}
