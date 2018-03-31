import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'geoideas.auth0.com',
    clientID: 'ZLKF7dIILd57X6yvPEYm9c5yZx3FwuAo',
    redirectUri: 'http://localhost:3000/',
    audience: 'https://geoideas.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}