const valueRef = document.querySelector('#value');
console.dir(valueRef);
const incrementRef = document.querySelector('[data-action="increment"]');
const decrementRef = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

incrementRef.addEventListener('click', onClickIncrement);
decrementRef.addEventListener('click', onClickDecrement);

function onClickIncrement() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}

function onClickDecrement() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}
