"use strict";

const validator = (items) => {
  let flag = true;
  items.forEach((item) => {
    switch (true) {
      case item.matches("[name='fio']"):
        if (!item.value.match(/[a-яA-Я]{2}/gi)) {
          flag = false;
          item.classList.add("error");
        }
        break;

      case item.matches("[name='phone']"):
        if (
          !item.value.match(
            /^((\+7|7|8)+\(?([0-9]){3}\)?)(\-?([0-9]){3})(\-?([0-9]){2}){2}$/g
          )
        ) {
          flag = false;
          item.classList.add("error");
        }
        break;
    }
  });
  return flag;
};

export default validator;
