const inputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onClickInput);

function onClickInput({ target }) {
  nameOutputRef.textContent = target.value;
  if (target.value === '') {
    nameOutputRef.textContent = 'Anonymous';
  }
}
