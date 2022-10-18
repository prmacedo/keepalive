import { Form } from './Form.js';
import { Counter } from './Counter.js';
import { Clock } from './Clock.js';
import { Forecast } from './Forecast.js';
import { Location } from './Location.js';
import { Authentication } from './Authentication.js';
import { Buttons } from './Buttons.js';

const path = window.location.pathname;

Authentication.authenticate(path);

if (path === "/" || path === "/index.html") {
  new Form();
} else if (path === "/home.html") {
  new Counter();
  new Clock();
  new Forecast();
  new Location();
  new Buttons();
}