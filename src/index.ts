// TODO обязательно отрефакторить

document.addEventListener("DOMContentLoaded", () => {
  const iconClose = document.getElementById("header_modal_menu_icon_close");
  const headerModalMenu = document.getElementById("header_modal_menu");
  const headerMobileIconMenu = document.getElementById("header_mobile_icon_menu"); // TODO убрать потом

  iconClose?.addEventListener("click", (event: MouseEvent) => {
    console.log("event", event);
    console.log("headerModalMenu", headerModalMenu?.classList.toggle("open"));
  });

  headerMobileIconMenu?.addEventListener("click", (event: MouseEvent) => {
    console.log("event", event);
    console.log("headerModalMenu", headerModalMenu?.classList.toggle("open"));
  });

  headerModalMenu?.addEventListener("click", (event: MouseEvent) => {
    event.preventDefault();

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
