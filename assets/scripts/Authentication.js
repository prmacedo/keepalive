class Authentication {
  constructor() {
    throw new Error("Esta classe não pode ser instanciada");
  }

  static authenticate(path) {
    const data = JSON.parse(localStorage.getItem('data'));
    const isLoggedIn = data?.isLoggedIn || false;

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
    const data = {
      isLoggedIn: true,
      user
    }

    localStorage.setItem('data', JSON.stringify(data));
    location.href = './home.html';
  }

  static logout() {
    localStorage.clear();
    location.href = './';
  }

  static rememberDataAndLogout() {
    const { user } = JSON.parse(localStorage.getItem('data'));
    const data = {
      isLoggedIn: false,
      user
    }

    localStorage.setItem('data', JSON.stringify(data));
    location.href = './';
  }
}

export { Authentication }