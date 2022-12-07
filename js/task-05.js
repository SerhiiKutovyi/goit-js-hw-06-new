const inputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');
console.log(nameOutputRef.textContent);
console.log(inputRef);

inputRef.addEventListener('input', onClickInput);

function onClickInput({ target }) {
  if (target.value !== '') {
    nameOutputRef.textContent = target.value;
  } else nameOutputRef.textContent = 'Anonymous';
}
