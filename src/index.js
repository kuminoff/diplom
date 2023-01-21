/*jshint esversion: 6 */

"use strict";

import modals from "./modules/modals";
import sliders from "./modules/sliders";
import timer from "./modules/timer";
import sendForm from "./modules/sendForm";
import formValid from "./modules/formValid.js";
import scrollBtn from "./modules/scrollBtn";
import modalDocuments from "./modules/modalDocuments";
import calculator from "./modules/calculator";
import getComments from "./modules/getComments";
import showComments from "./modules/showComments";

getComments("comments.json").then((data) => {
  showComments(data);
});

sliders();
modals();
timer("24 January 2023");
formValid();
modalDocuments();

sendForm({
  formName: "action-form",
  someElement: [
    {
      id: "calc-total",
    },
  ],
});

sendForm({
  formName: "action-form2",
  someElement: [
    {
      id: "calc-total",
    },
  ],
});

sendForm({
  formName: "callback-form1",
  someElement: [
    {
      id: "calc-total",
    },
  ],
});

sendForm({
  formName: "callback-form2",
  someElement: [
    {
      id: "calc-total",
    },
  ],
});

sendForm({
  formName: "application-form1",
  someElement: [
    {
      id: "calc-total",
    },
  ],
});

sendForm({
  formName: "application-form2",
  someElement: [
    {
      id: "calc-total",
    },
  ],
});

scrollBtn();

calculator();
