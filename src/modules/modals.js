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

  document.addEventListener("click", (e) => {
    switch (true) {
      case e.target === openBtnHeader || !!e.target.closest(".service-button"):
        e.preventDefault();
        overlay.style.display = "block";
        e.target === openBtnHeader
          ? (warningHeader.style.display = "block")
          : (warningServices.style.display = "block");
        break;

      case e.target === closeBtnHeader || e.target === closeBtnServices:
        e.preventDefault();
        overlay.style.display = "none";
        e.target === closeBtnHeader
          ? (warningHeader.style.display = "none")
          : (warningServices.style.display = "none");
        break;
    }
  });
};

export default modals;
