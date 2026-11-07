import markup from "../../markup.html?raw";

export function initDevWidget() {
  const selector = '.app';
  const container = document.querySelector(selector);
  if (container && !container.dataset.injected) {
    container.insertAdjacentHTML('afterbegin', markup);
    container.dataset.injected = 'true';
  }
}