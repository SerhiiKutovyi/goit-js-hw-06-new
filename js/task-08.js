const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onClickForm);

function onClickForm(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('  Поля должны быть заполнены!');
    return;
  }
  const obj = {
    email: email.value,
    password: password.value,
  };
  console.log(obj);
  event.currentTarget.reset();
}

// const form = document.querySelector('.login-form');

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();
//   if (event.target.email.value === '' || event.target.password.value === '') {
//     return alert('Будь ласка заповніть поля!');
//   }
//   const formElements = event.currentTarget.elements;
//   const mail = formElements.email.value;
//   const password = formElements.password.value;

//   const formData = { mail, password };
//   console.log(formData);
//   event.target.reset();
// }
