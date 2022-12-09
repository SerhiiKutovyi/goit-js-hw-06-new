const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputRef.addEventListener('input', ({ target }) => (textRef.style.fontSize = target.value + 'px'));
