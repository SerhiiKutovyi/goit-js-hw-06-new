const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

console.log(textRef);

inputRef.addEventListener('change', valueChange);

function valueChange(event) {
  //   console.log(event.target.value);
  textRef.event.stail.fontSize === event.target.value;
}
