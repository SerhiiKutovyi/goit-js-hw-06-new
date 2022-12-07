const counterRef = document.querySelector('#counter');
const decrementRef = document.querySelector('[data-action="decrement"]');
const incrementRef = document.querySelector('[data-action="increment"]');
console.log(decrementRef);
console.log(incrementRef);

const counterValue = 0;

counterRef.addEventListener('click', onClickIncrement);

function onClickIncrement(event) {
  if (event.target) {
    counterValue + 1;
  }
}

function onClickDecrement(event) {
  console.log(event);
}
