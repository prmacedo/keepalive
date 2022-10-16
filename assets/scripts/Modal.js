import { Authentication } from "./Authentication.js";

class Modal {
  #modal;

  constructor() {
    this.#modal = new tingle.modal({
      closeMethods: []
    });
  }

  open() {
    this.#modal.open();
    this.#modal.setContent(document.querySelector('.js-modal').innerHTML);

    this.#addEvents();
  }

  #addEvents() {
    const logoutBtn = document.querySelector('.tingle-modal .js-modalLogout');
    const continueBtn = document.querySelector('.tingle-modal .js-modalContinue');

    logoutBtn.addEventListener("click", Authentication.logout);
    continueBtn.addEventListener("click", this.#refresh);
  }

  #refresh() {
    location.reload();
  }
}

export { Modal }