"use strict";

import inputValid from "./inputValid";

const formValid = () => {
  const formItemsText = document.querySelectorAll("[name='fio']");
  const formItemsTel = document.querySelectorAll("[name='phone']");

  formItemsText.forEach((formItemText) => {
    formItemText.addEventListener("input", () => {
      formItemText.value = formItemText.value.replace(/[^а-яА-Я\s]+/g, "");
      if (formItemText.classList.contains("error")) inputValid(formItemText);
    });
  });

  formItemsTel.forEach((formItemTel) => {
    formItemTel.addEventListener("input", () => {
      formItemTel.value = formItemTel.value.replace(/[^\d\\(\\)\-\+]+/g, "");
      if (formItemTel.classList.contains("error")) inputValid(formItemTel);
    });
  });

  formItemsText.forEach((formItemText) => {
    formItemText.addEventListener("blur", () => {
      formItemText.value = formItemText.value.replace(/[\s]+/g, " ");
      formItemText.value = formItemText.value.replace(/[\-]+/g, " ");
      formItemText.value = formItemText.value.replace(/[\s\-]+/g, " ");
      formItemText.value = formItemText.value.replace(/^[\s\-]+/g, "");
      formItemText.value = formItemText.value.replace(/[\s\-]+$/g, "");
      formItemText.value = formItemText.value.replace(
        /( |^)[а-яА-Я]/g,
        function (x) {
          return x.toUpperCase();
        }
      );
    });
  });

  formItemsTel.forEach((formItemTel) => {
    formItemTel.addEventListener("blur", () => {
      formItemTel.value = formItemTel.value.replace(/[\-]+/g, "-");
      formItemTel.value = formItemTel.value.replace(/^[\s\-]+[\s\-]+/g, "");
      formItemTel.value = formItemTel.value.replace(/[\s\-]+$/g, "");
      formItemTel.value = formItemTel.value.replace(/[\s\-]+/g, "-");
    });
  });
};

export default formValid;
