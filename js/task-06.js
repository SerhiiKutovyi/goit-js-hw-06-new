const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', validationInput);

function validationInput({ target }) {
  // console.log(event.target.dataset.length);
  if (target.value.length === +target.dataset.length) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
}

// const refInput = document.querySelector('#validation-input');

// const returnRefInput = () => {
//   if (refInput.value.length === Number(refInput.dataset.length)) {
//     refInput.classList.remove('invalid');
//     refInput.classList.add('valid');
//   } else {
//     refInput.classList.remove('valid');
//     refInput.classList.add('invalid');
//   }
// };
// refInput.addEventListener('blur', returnRefInput);
