import "swiper/css";
import {
  createSliderMain,
  createSliderOurPhotos,
  createSliderOurAction,
} from "./code";

document.addEventListener("DOMContentLoaded", async () => {
  const iconClose = document.getElementById("header_modal_menu_icon_close");
  const headerModalMenu = document.getElementById("header_modal_menu");
  const headerMobileIconMenu = document.getElementById(
    "header_mobile_icon_menu"
  ); // TODO убрать потом

  iconClose?.addEventListener("click", () => {
    headerModalMenu?.classList.toggle("open");
  });

  headerMobileIconMenu?.addEventListener("click", () => {
    headerModalMenu?.classList.toggle("open");
  });

  headerModalMenu?.addEventListener("click", (event: MouseEvent) => {

    const currentElemment = event.target as HTMLAnchorElement;
    const listItem = currentElemment.closest(
      ".header__modal_menu_list_item, .header__modal_menu_footer_social_list_item, .header__modal_menu_footer_phone"
    );

    if (listItem) {
      headerModalMenu?.classList.toggle("open");

      if (currentElemment.hash) {
        const sectionSmooth = document?.querySelector(currentElemment.hash);

        if (!sectionSmooth) {
          const error = new Error("Некуда скролить");

          console.error(error);
          return;
        }

        sectionSmooth.scrollIntoView({ behavior: "smooth", block: "end" });
      } else {
        const error = new Error("В ссылке не указан якорь");

        console.error(error);
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const mainSlider = createSliderMain("our_services__slider");
  let prevIndex = mainSlider.activeIndex;
  const maxWidth844 = 844;
  const ourServicesSliderThumbsWrapper = document.getElementById(
    "our_services__slider_thumbs_wrapper"
  );
  const dataThumbButtonNumbers =
    ourServicesSliderThumbsWrapper?.querySelectorAll("[data-thumb-number]");

  function addClassThumbsActive() {
    dataThumbButtonNumbers?.forEach((element) => {
      // Приведение типа к HTMLElement для TypeScript
      const htmlElement = element as HTMLElement;

      // Получаем значение атрибута data-thumb-button-number
      const thumbButtonNumber = htmlElement.getAttribute("data-thumb-number");

      // Проверяем, что значение атрибута равно "0"
      if (Number(thumbButtonNumber) === mainSlider.activeIndex) {
        // Изменяем класс элемента
        htmlElement.classList.add("our_services__slider_thumbs--active"); // Замените 'new-class-name' на нужный вам класс
      }
    });
  }

  function handlerMaxWidthFull(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;

    if (!targetElement?.hasAttribute("data-thumb-button-number")) return;

    // Получаем значение атрибута и переходим к соответствующему слайду
    const thumbButtonNumber = targetElement.getAttribute(
      "data-thumb-button-number"
    );

    mainSlider.slideTo(Number(thumbButtonNumber));

    // Обновляем активные классы у элементов
    updateThumbButtonClasses(thumbButtonNumber);
  }

  function handlerMaxWidth844(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
    // event.stopPropagation();

    // Проверяем, что клик произошел на элементе карточки или на вложенном элементе карточки
    const target = targetElement.closest(".our_services__slider_thumbs");

    // Если target действительно является карточкой
    if (target) {
      // Получаем значение атрибута data-thumb-number
      const thumbButtonNumber = target.getAttribute("data-thumb-number");

      mainSlider.slideTo(Number(thumbButtonNumber));

      // Обновляем активные классы у элементов
      updateThumbButtonClasses(thumbButtonNumber);
    }
  }

  function updateThumbButtonClasses(thumbButtonNumber: string | null) {
    if (prevIndex === mainSlider.activeIndex) return;

    const prevElem = document.querySelector(
      `[data-thumb-number="${prevIndex}"]`
    );

    const currentElemment = document.querySelector(
      `[data-thumb-number="${thumbButtonNumber}"]`
    );

    currentElemment?.classList.add("our_services__slider_thumbs--active");

    prevElem?.classList.remove("our_services__slider_thumbs--active");

    // Обновляем индекс предыдущего активного элемента
    prevIndex = mainSlider.activeIndex;
  }

  function clearOurServicesSliderThumbsWrapperEvents() {
    ourServicesSliderThumbsWrapper?.removeEventListener(
      "click",
      handlerMaxWidthFull
    );
    ourServicesSliderThumbsWrapper?.removeEventListener(
      "click",
      handlerMaxWidth844
    );
  }

  function listenerMaxWidthFull() {
    addClassThumbsActive();

    ourServicesSliderThumbsWrapper?.addEventListener(
      "click",
      handlerMaxWidthFull
    );
  }

  function listenerMaxWidth844() {
    addClassThumbsActive();

    ourServicesSliderThumbsWrapper?.addEventListener(
      "click",
      handlerMaxWidth844
    );
  }

  // Функция для проверки ширины экрана
  function checkScreenWidth() {
    if (window.innerWidth >= maxWidth844) {
      clearOurServicesSliderThumbsWrapperEvents();
      listenerMaxWidthFull();
    }

    if (window.innerWidth <= maxWidth844) {
      clearOurServicesSliderThumbsWrapperEvents();
      listenerMaxWidth844();
    }
  }

  // Инициализация проверки при загрузке страницы
  checkScreenWidth();

  // Добавление обработчика события resize для отслеживания изменений размера окна
  window.addEventListener("resize", checkScreenWidth);
});

document.addEventListener("DOMContentLoaded", () => {
  createSliderOurPhotos("our_photos__slider_swiper");
});

/**
 * Работа со слайдером для мобильных устройств "Акции"
 */
document.addEventListener("DOMContentLoaded", () => {
  const maxWidth844 = 844;

  // Добавление обработчика события resize для отслеживания изменений размера окна
  if (window.innerWidth <= maxWidth844) {
    const ourActionCardsSwiper = document.getElementById(
      "our_action__cards_swiper"
    );
    const ourActionCards = document.getElementById("our_action__cards");

    ourActionCardsSwiper?.classList.add("swiper");
    ourActionCards?.classList.add("swiper-wrapper");

    // Получаем все первые потомки li внутри ul
    const listItems = ourActionCards?.children;

    if (listItems && listItems.length) {
      // Проходим по каждому элементу li и добавляем ему класс
      for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.add("swiper-slide"); // Замените "new-class-name" на нужный вам класс
      }
    }

    createSliderOurAction("our_action__cards_swiper");
  }

  function resizeScreen() {
    const ourActionCardsSwiper = document.getElementById(
      "our_action__cards_swiper"
    );
    const ourActionCards = document.getElementById("our_action__cards");
    // Получаем все первые потомки li внутри ul
    const listItems = ourActionCards?.children;

    // Добавление обработчика события resize для отслеживания изменений размера окна
    if (window.innerWidth <= maxWidth844) {
      ourActionCardsSwiper?.classList.add("swiper");
      ourActionCards?.classList.add("swiper-wrapper");

      if (listItems && listItems.length) {
        // Проходим по каждому элементу li и добавляем ему класс
        for (let i = 0; i < listItems.length; i++) {
          listItems[i].classList.add("swiper-slide"); // Замените "new-class-name" на нужный вам класс
        }
      }
    }

    if (window.innerWidth >= maxWidth844) {
      ourActionCardsSwiper?.classList.remove("swiper");
      ourActionCards?.classList.remove("swiper-wrapper");

      if (listItems && listItems.length) {
        // Проходим по каждому элементу li и добавляем ему класс
        for (let i = 0; i < listItems.length; i++) {
          listItems[i].classList.remove("swiper-slide"); // Замените "new-class-name" на нужный вам класс
        }
      }
    }
  }

  // Добавление обработчика события resize для отслеживания изменений размера окна
  window.addEventListener("resize", resizeScreen);
});

document.addEventListener("DOMContentLoaded", () => {
  // Получаем кнопку
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  if (!scrollToTopBtn) return;

  // Показываем кнопку при прокрутке вниз
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (!scrollToTopBtn) return;

    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }

  // Прокручиваем вверх при нажатии на кнопку
  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Плавная прокрутка
    });
  });
});
