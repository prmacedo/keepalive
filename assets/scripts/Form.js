import { Authentication } from "./Authentication.js";

class Form {
  #inputs;
  #form;
  #error;

  constructor() {
    this.#inputs = [
      document.querySelector(".js-inputEmail"),
      document.querySelector(".js-inputPass")
    ];

    this.#form = document.querySelector(".js-form");
    this.#error = document.querySelector(".js-error");

    this.#addEvents();
  }

  #addEvents() {
    this.#addOnChangeEvent();
    this.#addOnSubmitEvent();
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

  #addOnSubmitEvent() {
    this.#form.addEventListener("submit", this.#loginValidation);
  }

  #loginValidation = (evt) => {
    evt.preventDefault();

    const [ email, password ] = this.#inputs;

    if ( email.value.length === 0 || password.value.length === 0) {
      this.#printError();
    } else {
      const user = {
        email: email.value,
        password: password.value
      }

      const userExists = this.#searchUser(user);

      if (!userExists) {
        this.#printError();
      } else {
        Authentication.login(user);
      }
    }
  }

  #printError() {
    const [ email, password ] = this.#inputs;

    email.classList.add("form__input--error");
    password.classList.add("form__input--error");

    this.#error.classList.remove("form__error--hidden");
  }

  #searchUser(user) {
    const { email, password } = user;
    const index = this.#mockup.map(userData => userData.email).indexOf(email);

    return index < 0 ? false : this.#mockup[index].password === password;
  }

  #mockup = [
    { email: "admin@admin.com", password: "admin" },
    { email: "fabi@mail.com.br", password: "123456" },
    { email: "nico@mail.com.br", password: "123456" },
    { email: "paulo@mail.com.br", password: "123456" },
    { email: "leandro@mail.com.br", password: "123456" }
  ]
}

export { Form }