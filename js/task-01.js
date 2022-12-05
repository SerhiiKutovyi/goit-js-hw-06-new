const categoriesRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesRef.length}`);

// ======================= 1 Вариант =====================

const totalAmount = document.querySelectorAll('.item ul');
totalAmount.forEach(element => {
  console.log(`Category: ${element.previousElementSibling.textContent}`);
  console.log(`Elements: ${element.children.length}`);
});

// ======================= 2 Вариант =======================

// const amountOfElementsEl = document.querySelectorAll('.item');
// amountOfElementsEl.forEach(element => {
//   console.log('Category :', element.querySelector('h2').textContent);
//   console.log(`Elements : ${element.querySelectorAll('li').length}`);
// });
