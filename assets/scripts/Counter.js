class Counter {
  #counter;
  #time = 6;
  #startCounter;

  constructor() {
    this.#counter = document.querySelector('.js-counter');
    this.#counter.textContent = this.#time;

    this.#startCounter = setInterval(this.#updateCounter, 1000);
  }

  #updateCounter = () => {
    if (this.#hasTimedOut()) {
      console.log('Timeout');

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