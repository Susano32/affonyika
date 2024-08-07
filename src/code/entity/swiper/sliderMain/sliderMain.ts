import { Swiper } from "swiper";
import { Thumbs } from "swiper/modules";

export function createSliderMain(className: string) {
  return new Swiper(`.${className}`, {
    spaceBetween: 5,
    modules: [Thumbs],
    allowTouchMove: false,
    speed: 600,
    autoHeight: true,
  });
}
