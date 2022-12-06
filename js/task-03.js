const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const imagesRef = document.querySelector('.gallery');

// const imageGalleries = images => {
//   return images.map(image => {
//     const galleriesImg = document.createElement('img');
//     galleriesImg.src = `${image.url}`;
//     galleriesImg.alt = `${image.alt}`;
//     const galleriesLi = document.createElement('li');
//     galleriesLi.append(galleriesImg);
//     return galleriesLi;
//   });
// };

// imagesRef.append(...newImageGalleries);

const imagesRef = document.querySelector('.gallery');

const imageGalleries = images => {
  const element = images
    .map(({ url, alt }) => `<li><img src = ${url} alt=${alt}, class="photos" ></li>`)
    .join('');
  return element;
};

const newImageGalleries = imageGalleries(images);
imagesRef.insertAdjacentHTML('afterbegin', newImageGalleries);
