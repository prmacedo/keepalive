import { Authentication } from "./Authentication.js";

class Modal {
  #modal;

  constructor(closeMethods = []) {
    this.#modal = new tingle.modal({
      closeMethods: [...closeMethods]
    });
  }

  open(modal) {
    this.#modal.open();
    this.#modal.setContent(document.querySelector(modal).innerHTML);

    this.#addEvents();
  }

  #addEvents() {
    const counterLogout = document.querySelector('.tingle-modal .js-counterLogout');
    const counterContinue = document.querySelector('.tingle-modal .js-counterContinue');

    const logoutClear = document.querySelector('.tingle-modal .js-logoutClear');
    const logoutRemember = document.querySelector('.tingle-modal .js-logoutRemember');

    counterLogout?.addEventListener("click", Authentication.logout);
    counterContinue?.addEventListener("click", this.#refresh);

    logoutClear?.addEventListener("click", Authentication.logout);
    logoutRemember?.addEventListener("click", Authentication.rememberDataAndLogout);
  }

  #refresh() {
    location.reload();
  }
}

export { Modal }