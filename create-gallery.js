import collection from './gallery-items.js';

const galleryContainer = document.querySelector('ul.js-gallery');
const openModal = document.querySelector('div.js-lightbox');
const closeModalBtn = document.querySelector('[data-action="close-lightbox"]');
const lightboxImg = document.querySelector('img.lightbox__image');
const closeLightboxOverlay = document.querySelector('.lightbox__overlay');
let onMyIndex;
const cardMarkup = createGalleryHtml(collection);

galleryContainer.insertAdjacentHTML('afterbegin', cardMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGalleryHtml(collection) {
  return collection
    .map(({ preview, original, description }, index) => {
      return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      data-index="${index}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');
}

function onGalleryContainerClick(evt) {
  evt.preventDefault();
  const isGalleryImgEl = evt.target.classList.contains('gallery__image');

  if (!isGalleryImgEl) {
    return;
  }
  lightboxImg.src = evt.target.dataset.source;
  onMyIndex = evt.target.dataset.index;
  window.addEventListener('keydown', onEscKeyPress);
  closeLightboxOverlay.addEventListener('click', onCloseModal);
  closeModalBtn.addEventListener('click', onCloseModal);
  openModal.classList.add('is-open');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  openModal.classList.remove('is-open');
  lightboxImg.src = '';
}
function clickArrowLeft() {
  console.log(onMyIndex);
  if (onMyIndex <= 0) {
    return;
  }
  lightboxImg.src = collection[onMyIndex - 1].original;
  onMyIndex = Number(onMyIndex) - 1;
}
function clickArrowRight() {
  if (onMyIndex >= collection.length - 1) {
    return;
  }

  lightboxImg.src = collection[Number(onMyIndex) + 1].original;
  onMyIndex = Number(onMyIndex) + 1;
}

function onEscKeyPress(evt) {
  // const ESC_KEY_CODE = 'Escape';
  // if (evt.code === ESC_KEY_CODE) {
  //   onCloseModal();
  // }
  switch (evt.key) {
    case 'Escape':
      onCloseModal();
      break;
    case 'ArrowLeft':
      clickArrowLeft();
      break;
    case 'ArrowRight':
      clickArrowRight();
      break;
    default:
      console.log(evt);
  }
}

// function nextImage(images) {
//   const currentImage = images.find(image => image.original === lightboxImageEl.src);
//   let index = currentImage ? images.indexOf(currentImage) : 0;
//   if (index < images.length - 1) {
//     index += 1;
//   } else {
//     index = 0;
//   }
//   lightboxImageEl.src = images[index].original;
// };
// function previousImage() {
//   const currentImage = images.find(image => image.original === lightboxImageEl.src);
//   let index = currentImage ? images.indexOf(currentImage) : images.length - 1;
//   if (index > 0) {
//     index -= 1;
//   } else {
//     index = images.length - 1;
//   }
//   lightboxImageEl.src = images[index].original;
// };
// function onArrowRightPress(event) {
//   if (event.code === 'ArrowRight') {
//     nextImage(images);
//   }
// };
// function onArrowLeftPress(event) {;
//   if (event.code === 'ArrowLeft') {
//     previousImage(images);
//   }
// };
