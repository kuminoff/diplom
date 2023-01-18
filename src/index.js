/*jshint esversion: 6 */

"use strict";

import modals from "./modules/modals";
import sliders from "./modules/sliders";
import timer from "./modules/timer";
import sendForm from "./modules/sendForm";
import formValid from "./modules/formValid.js";
import scrollBtn from "./modules/scrollBtn";

sliders();

modals();

timer("24 January 2023");

formValid();

sendForm({
  formName: "action-form",
});

sendForm({
  formName: "action-form2",
});

scrollBtn();
