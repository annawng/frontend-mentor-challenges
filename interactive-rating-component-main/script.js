'use strict';
(function () {
  let selected;

  window.addEventListener('load', init);

  function init() {
    qs('button').addEventListener('click', handleClick);
    const numbers = qsa('li');
    numbers.forEach((number) => number.addEventListener('click', selectNumber));
  }

  function handleClick() {
    if (selected) {
      qs('.rating-state').classList.add('hidden');
      qs('.thank-you-state').classList.remove('hidden');
    }
    setRating();
  }

  function selectNumber(e) {
    const clicked = e.target;
    if (selected) {
      selected.classList.remove('selected');
    }
    clicked.classList.add('selected');
    selected = clicked;
  }

  function setRating() {
    qs('.rating').innerHTML = selected.innerHTML;
  }

  function qs(selector) {
    return document.querySelector(selector);
  }

  function qsa(selector) {
    return document.querySelectorAll(selector);
  }
})();
