// import collection from './gallery-items.js';

// const container = document.querySelector('.js-gallery');
// // const urlRef = document.querySelector('.gallery');
// // console.log(urlRef);
// const cardMarkup = createGalleryHtml(collection);

// container.insertAdjacentHTML('afterbegin', cardMarkup);
// container.addEventListener('click', onContainerClick);

// function createGalleryHtml(collection) {
//   return collection
//     .map(({ preview, original, description }) => {
//       return `<li class="gallery__item">
//   <a
//     class="gallery__link"
//     href="${original}"
//   >
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </li>`;
//     })
//     .join('');
// }

import data from '../gallery-items.js';
const addElementsGallery = document.querySelector('.js-gallery');
const openModal = document.querySelector('.js-lightbox');
const closeModalBtn = document.querySelector('[data-action="close-lightbox"]');

const makeListImage = (elemImage, index) => {
  //тут  вішаєш клік і прцюєш  з  нею

  return `
  <li class="gallery__item">
  <a
    class="gallery__link"
    href=${elemImage.preview}
  >
    <img
      class="gallery__image"
      src=${elemImage.original}
      data-source=${elemImage.description}
      alt="Tulips"
    />
  </a>
</li>
`;
};

const makeGalleryElements = data.map(makeListImage).join('');
addElementsGallery.insertAdjacentHTML('afterbegin', makeGalleryElements);
addElementsGallery.addEventListener('click', onContainerClick);
// openModal.addEventListener('click', onOpenModal);
closeModalBtn.addEventListener('click', onCloseModal);

function onContainerClick(evt) {
  const isGalleryLinkEl = evt.target.classList.contains('gallery__link');
  if (!isGalleryLinkEl) {
    return;
  }
  // console.log(evt.target);
}

// function onOpenModal() {
//   document.body.classList.add('is-open');
//   document.body.classList.remove('is-open');
// }

// function onCloseModal() {
//   document.body.classList.remove('is-open');
// }
openModal.addEventListener('click', evt => {
  if (evt.currentTarget === evn.target) {
    document.body.classList.add('is-open');
  } else {
    document.body.classList.remove('is-open');
  }
});
