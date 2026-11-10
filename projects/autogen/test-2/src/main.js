import markup from './markup.html?raw';
import './style.css';
import {fact} from "./scripts/fact.ts";

document.getElementById('tester').insertAdjacentHTML('afterbegin', markup);
const data = document.querySelector(".tester__title");
if (data) {
    data.textContent = String(fact(5));
}
