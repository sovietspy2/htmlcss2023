import AbstractView  from "./AbstractView";

class LoginDialog extends HTMLElement {
    constructor() {
        super();
       
        //const template = document.getElementById('login-dialog-template');
        this.innerHTML = `
        <dialog open id="login-dialog">
          <h2>Login</h2>
          <label for="username">Username:</label>
          <input type="text" id="username" required>
          <label for="password">Password:</label>
          <input type="password" id="password" required>
          <button id="login-button">Log In</button>
      </dialog>`
    
    }
}

customElements.define('login-dialog', LoginDialog);


export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Login");
    }

    async getHtml() {
        return `<login-dialog></login-dialog>`
    }
}