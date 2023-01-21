"use strict";

const modals = () => {
  const overlay = document.querySelector(".overlay");
  const warningHeader = document.querySelector(".header-modal");
  const closeBtnHeader = warningHeader.querySelector(".header-modal__close");
  const openBtnHeader = document.querySelector(".button > a");
  const warningServices = document.querySelector(".services-modal");
  const closeBtnServices = warningServices.querySelector(
    ".services-modal__close"
  );

  warningHeader.classList.add("animated");
  warningServices.classList.add("animated");

  document.addEventListener("click", (e) => {
    switch (true) {
      case e.target === openBtnHeader || !!e.target.closest(".service-button"):
        e.preventDefault();
        overlay.style.display = "block";
        if (e.target === openBtnHeader) {
          warningHeader.style.display = "block";
          warningHeader.classList.add("fadeIn");
        } else {
          warningServices.style.display = "block";
          warningServices.classList.add("fadeIn");
        }
        break;

      case e.target === closeBtnHeader || e.target === closeBtnServices:
        e.preventDefault();
        overlay.style.display = "none";
        if (e.target === closeBtnHeader) {
          warningHeader.classList.remove("fadeIn");
          warningHeader.style.display = "none";
        } else {
          warningServices.classList.add("fadeIn");
          warningServices.style.display = "none";
        }
        break;
    }
  });
};

export default modals;
