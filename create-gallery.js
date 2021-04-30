import collection from './gallery-items.js';

const container = document.querySelector('ul.js-gallery');
const openModal = document.querySelector('div.js-lightbox');
const closeModalBtn = document.querySelector('lightbox__button');
const lightboxImg = document.querySelector('img.lightbox__image');
const cardMarkup = createGalleryHtml(collection);

container.insertAdjacentHTML('afterbegin', cardMarkup);
// closeModalBtn.forEach(container => {
//   container.addEventListener('click', onContainerClick, { one: true });
// });
container.addEventListener('click', onContainerClick);

// closeModalBtn.addEventListener('click', onCloseModal);

function createGalleryHtml(collection) {
  return collection
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');
}

// console.log(createGalleryHtml(collection));

function onContainerClick(evt) {
  const isGalleryLinkEl = evt.target.classList.contains('gallery__image');
  if (!isGalleryLinkEl) {
    return;
  }
  closeModalBtn.addEventListener('click', onCloseModal);
  // closeModalBtn.classList.remove('is-open');
  openModal.classList.add('is-open');
  lightboxImg.src = evt.target.dataset.source;
  if (openModal) {
    onCloseModal();
  }
  // console.log(evt.target);
  // evn.preventDefault();
}

// function onOpenModal() {
//   document.querySelector.classList.add('is-open');
// }

function onCloseModal() {
  lightboxImg.classList.remove('is-open');
}

// openModal.addEventListener('click', evt => {
//   if (evt.currentTarget === evn.target) {
//     document.body.classList.add('is-open');
//   } else {
//     document.body.classList.remove('is-open');
//   }
// });

// import data from '../gallery-items.js';
// const galleryContainer = document.querySelector('.js-gallery');
// galleryContainer.addEventListener('click', onGalleryContainerClick);
// // const myClickButton = document.querySelector(".myButtonTest");

// const makeListImage = ({ preview, original, description }) => {
//   return `
//   <li class="gallery__item">
//   <a
//     class="gallery__link"
//     href=${original}
//   >
//     <img
//       class="gallery__image"
//       src=${preview}
//       data-source=${original}
//       alt=${description}
//     />
//   </a>
// </li>
// `;
// };
// const createGalleryElements = data.map(makeListImage).join('');
// galleryContainer.insertAdjacentHTML('afterbegin', createGalleryElements);
// const openBtnForImage = document.querySelector('.lightbox');

// function onGalleryContainerClick(evt) {
//   if (evt.target.nodeName !== 'IMG') {
//     console.log(evt.target.nodeName);
//     return;
//   }
//   const currentActiveImg = evt.target.dataset.source;

//   openBtnForImage.classList.add('is-open');
//   if (currentActiveImg) {
//     const imageElementShow = document.querySelector('.lightbox__image');
//     imageElementShow.src = currentActiveImg;
//     const clickBtnCloseRef = document.querySelector('.lightbox__button');
//     clickBtnCloseRef.addEventListener('click', clickBtn);
//     console.log(imageElementShow);
//   }
//   console.log(currentActiveImg);
// }
// const clickBtn = () => {
//   const changeBtn = document.querySelector('.lightbox__button');
//   openBtnForImage.classList.remove('is-open');
// };
