import { Form } from './Form.js';
import { Counter } from './Counter.js';

const path = window.location.pathname;

if (path === "/" || path === "/index.html") {
  new Form();
} else if (path === "/home.html") {
  new Counter();
}