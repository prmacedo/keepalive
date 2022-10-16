class Clock {
  #clock;
  #hourOptions = { hour: '2-digit', minute: '2-digit' };
  #dateOptions = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };

  constructor() {
    this.#clock = {
      hour: document.querySelector(".js-hour"),
      day: document.querySelector(".js-day")
    }

    this.#setDate();
    this.#startClock();
  }

  #setDate() {
    const today = new Date().toLocaleString('pt-br', this.#dateOptions);
    this.#clock.day.textContent = today;
  }

  #startClock() {
    this.#setHour();
    this.#updateClock();
  }

  #setHour() {
    const now = new Date().toLocaleString('pt-br', this.#hourOptions);
    this.#clock.hour.textContent = now;
  }

  #updateClock() {
    setInterval(() => {
      this.#setHour();
    }, 1000);
  }
}

export { Clock }