import { Authentication } from "./Authentication.js";

class Buttons {
  #logout;

  constructor() {
    this.#logout = document.querySelector(".js-buttonLogout");
    this.#logout.addEventListener('click', Authentication.logout);
  }
}

export { Buttons }