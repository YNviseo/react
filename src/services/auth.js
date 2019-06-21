class Auth {

    constructor() {
        this.authenticated = false;
    }

    login(callback) {
        this.authenticated = true;
        localStorage.setItem('isAuthenticated', true);
        callback();
    }
    logout(callback) {
        this.authenticated = false;
        localStorage.removeItem('isAuthenticated');
        callback();
    }
    isAuthenticated() {
        return  localStorage.getItem('isAuthenticated');
    }
}

export default new Auth();