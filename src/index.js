// TODO: html-loader is not installed (no image sync)

import "./css/josh-comeau-reset.css";
import "./css/styles.css";

import { home as homeContent } from "./js/home.js";
import { menu as menuContent } from "./js/menu.js";
import { about as aboutContent } from "./js/about.js";

const content = document.getElementById("content");
const btnHome = document.getElementById("nav-home");
const btnMenu = document.getElementById("nav-menu");
const btnAbout = document.getElementById("nav-about");

btnHome.addEventListener("click", () => changeContent(homeContent));
btnMenu.addEventListener("click", () => changeContent(menuContent));
btnAbout.addEventListener("click", () => changeContent(aboutContent));

function changeContent(elementsToAdd) {
    content.innerHTML = "";
    elementsToAdd.forEach(e => content.appendChild(e));
}

changeContent(homeContent);