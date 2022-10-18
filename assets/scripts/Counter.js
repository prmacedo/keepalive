import { Modal } from './Modal.js';

class Counter {
  #counter;
  #time = 600;
  #startCounter;
  #modal;

  constructor() {
    this.#counter = document.querySelector('.js-counter');
    this.#counter.textContent = this.#time;

    this.#modal = new Modal();

    this.#startCounter = setInterval(this.#updateCounter, 1000);
  }

  #updateCounter = () => {
    if (this.#hasTimedOut()) {
      this.#modal.open('.js-counterModal');
      clearInterval(this.#startCounter);
    } else {
      this.#counter.textContent = Number(this.#counter.textContent) - 1;
    }
  }

  #hasTimedOut() {
    return this.#counter.textContent == 0;
  }
}

export { Counter };