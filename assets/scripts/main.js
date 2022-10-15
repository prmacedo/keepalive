import { Form } from './Form.js';

const path = window.location.pathname;

if (path === "/" || path === "/index.html") {
  new Form();
} else if (path === "/home.html") {
  console.log("Página home.html");
}