class Form {
  #inputs;

  constructor() {
    this.#inputs = document.querySelectorAll(".js-input");

    this.#addEvents();
  }

  #addEvents() {
    this.#addOnChangeEvent();
  }

  #addOnChangeEvent() {
    this.#inputs.forEach(input => {
      input.addEventListener("change", this.#toggleFilledInputClass);
    });
  }

  #toggleFilledInputClass(evt) {
    const input = evt.target;

    if (input.value.length > 0) {
      input.classList.add("form__input--filled");
    } else {
      input.classList.remove("form__input--filled");
    }
  }
}

export { Form }