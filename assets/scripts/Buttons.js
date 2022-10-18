import { Modal } from "./Modal.js";

class Buttons {
  #logout;

  constructor() {
    this.#logout = document.querySelector(".js-buttonLogout");
    this.#logout.addEventListener('click', this.#openModal);
  }

  #openModal() {
    new Modal(['button']).open('.js-logoutModal');
  }
}

export { Buttons }