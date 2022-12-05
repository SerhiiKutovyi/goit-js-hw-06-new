const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const IngredientsRef = document.querySelector('#ingredients');

// const newElement = ingredients.map(ele => {
//   const listEl = document.createElement('li');
//   listEl.classList.add('item');
//   listEl.textContent = ele;
//   return listEl;
// });

// IngredientsRef.append(...newElement);

// ======================== Функция ============================ //

const newIngredients = element => {
  return element.map(ele => {
    const listEl = document.createElement('li');
    listEl.classList.add('item');
    listEl.textContent = ele;
    return listEl;
  });
};

const newElement = newIngredients(ingredients);
IngredientsRef.append(...newElement);
