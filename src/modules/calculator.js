"use strict";

import { animate } from "./animate";

const calculator = () => {
  const calc = document.getElementById("calc");
  const calcType = document.getElementById("calc-type");
  const calcTypeMaterial = document.getElementById("calc-type-material");
  const calcSquare = document.getElementById("calc-input");
  const totalInput = document.getElementById("calc-total");
  const calctSelects = [calcType, calcTypeMaterial];
  let oldValue = 0;
  let totalValue = 0;

  oldValue = totalValue;
  totalValue = 0;

  if (calc === null) return;

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcTypeMaterialValue = !isNaN(
      +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value
    )
      ? +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value
      : 1;
    const calcSquareValue = +calcSquare.value;
    oldValue = totalValue;

    if (
      !isNaN(+calcType.options[calcType.selectedIndex].value) &&
      calcSquare.value !== ""
    ) {
      totalValue = calcTypeValue * calcTypeMaterialValue * calcSquareValue;

      animate({
        duration: 1000,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          if (totalValue > oldValue) {
            totalInput.value = parseFloat(
              (oldValue + (totalValue - oldValue) * progress).toFixed(2)
            );
          } else if (totalValue < oldValue) {
            totalInput.value = parseFloat(
              (oldValue - (oldValue - totalValue) * progress).toFixed(2)
            );
          } else {
            totalInput.value = totalValue;
          }
        },
      });
    } else {
      totalInput.value = "";
    }
  };

  calctSelects.forEach((item) => {
    item.addEventListener("change", () => {
      countCalc();
    });
  });

  calcSquare.addEventListener("input", () => {
    countCalc();
  });
};

export default calculator;
