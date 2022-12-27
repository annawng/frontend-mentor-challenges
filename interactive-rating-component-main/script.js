'use strict';
(function () {
  let selected;

  window.addEventListener('load', init);

  function init() {
    qs('button').addEventListener('click', handleClick);
    const numbers = qsa('input');
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
      getLabel(selected.id).classList.remove('selected');
    }
    getLabel(e.target.id).classList.add('selected');
    selected = clicked;

    qs('button').disabled = false;
  }

  function setRating() {
    qs('.rating').innerHTML = selected.value;
  }

  function getLabel(id) {
    return qs(`.${id}`);
  }

  function qs(selector) {
    return document.querySelector(selector);
  }

  function qsa(selector) {
    return document.querySelectorAll(selector);
  }
})();
