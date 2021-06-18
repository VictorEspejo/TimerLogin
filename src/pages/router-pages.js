import { html } from 'lit-element';
import './LoginPage/index.js';
import './MainPage/index.js';

const routerPages = {
  login: html`<login-page></login-page>`,
  main: html`<main-page></main-page>`,
};

export default page => routerPages[page] || routerPages.login;
