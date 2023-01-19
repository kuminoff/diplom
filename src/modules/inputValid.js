"use strict";

const inputValid = (item) => {
  switch (true) {
    case item.matches("[name='fio']"):
      if (item.value.match(/[a-яA-Я]{2}/gi)) {
        item.classList.remove("error");
      }
      break;

    case item.matches("[name='phone']"):
      if (
        item.value.match(
          /^((\+7|7|8)+\(?([0-9]){3}\)?)(\-?([0-9]){3})(\-?([0-9]){2}){2}$/g
        )
      ) {
        item.classList.remove("error");
      }
      break;
  }
};

export default inputValid;
