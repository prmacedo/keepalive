class Authentication {
  constructor() {
    throw new Error("Esta classe não pode ser instanciada");
  }

  static authenticate(path) {
    const isLoggedIn = localStorage.getItem('user');

    if (path !== '/' && path !== 'index.html') {
      if (!isLoggedIn) {
        location.href = './';
      }
    } else {
      if (isLoggedIn) {
        location.href = './home.html';
      }
    }
  }

  static login(user) {
    localStorage.setItem('user', JSON.stringify(user));
    location.href = './home.html';
  }

  static logout() {
    localStorage.clear();
    location.href = './';
  }
}

export { Authentication }