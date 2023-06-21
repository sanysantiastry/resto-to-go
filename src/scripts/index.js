/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
// eslint-disable-next-line import/extensions
import "./component/restaurant-list.js";
import App from "./view/app";
import swRegister from "./utils/sw-register";
import CONFIG from "./globals/config";

const app = new App({
  button: document.querySelector("#hamburger-menu"),
  drawer: document.querySelector("#drawer"),
  content: document.querySelector("#mainContent"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});
