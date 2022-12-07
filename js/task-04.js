const counterRef = document.querySelector('#counter');
const decrementRef = document.querySelector('[data-action="decrement"]');
const incrementRef = document.querySelector('[data-action="increment"]');
console.log(decrementRef);
console.log(incrementRef);

const counterValue = 0;

incrementRef.addEventListener('click', onClickIncrement);

function onClickIncrement(event) {
  console.log(event);
}

function onClickDecrement(event) {
  console.log(event);
}
