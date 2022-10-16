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

    logoutBtn.addEventListener("click", this.#logout);
    continueBtn.addEventListener("click", this.#refresh);
  }

  #logout() {
    localStorage.clear();
    location.href = './'
  }

  #refresh() {
    location.reload();
  }
}

export { Modal }