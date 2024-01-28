"use strict";
const expander1 = document.querySelector(".expand1");
const expander2 = document.querySelector(".expand2");
const expander3 = document.querySelector(".expand3");
const expander4 = document.querySelector(".expand4");
const panel1 = document.querySelector(".panel1");
const panel2 = document.querySelector(".panel2");
const panel3 = document.querySelector(".panel3");
const panel4 = document.querySelector(".panel4");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
let panel1expanded = false;
let panel2expanded = false;
let panel3expanded = false;
let panel4expanded = false;
expander1.addEventListener("click", function () {
  panel1.classList.toggle("hidden");
  if (panel1expanded === false) {
    img1.src = "/assets/images/icon-minus.svg";
    panel1expanded = true;
  } else {
    img1.src = "/assets/images/icon-plus.svg";
    panel1expanded = false;
  }
});
expander2.addEventListener("click", function () {
  panel2.classList.toggle("hidden");
  if (panel2expanded === false) {
    img2.src = "/assets/images/icon-minus.svg";
    panel2expanded = true;
  } else {
    img2.src = "/assets/images/icon-plus.svg";
    panel2expanded = false;
  }
});
expander3.addEventListener("click", function () {
  panel3.classList.toggle("hidden");
  if (panel3expanded === false) {
    img3.src = "/assets/images/icon-minus.svg";
    panel3expanded = true;
  } else {
    img3.src = "/assets/images/icon-plus.svg";
    panel3expanded = false;
  }
});
expander4.addEventListener("click", function () {
  panel4.classList.toggle("hidden");
  if (panel4expanded === false) {
    img4.src = "/assets/images/icon-minus.svg";
    panel4expanded = true;
  } else {
    img4.src = "/assets/images/icon-plus.svg";
    panel4expanded = false;
  }
});
