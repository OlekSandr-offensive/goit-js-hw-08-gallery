import collection from './gallery-items.js';

const galleryContainer = document.querySelector('ul.js-gallery');
const openModal = document.querySelector('div.js-lightbox');
const closeModalBtn = document.querySelector('[data-action="close-lightbox"]');
const lightboxImg = document.querySelector('img.lightbox__image');
const closeLightboxOverlay = document.querySelector('.lightbox__overlay');

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
      alt="${description}"
      data-index="${index}"
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
  window.addEventListener('keydown', onEscKeyPress);
  closeLightboxOverlay.addEventListener('click', onCloseModal);
  closeModalBtn.addEventListener('click', onCloseModal);
  openModal.classList.add('is-open');
  lightboxImg.src = evt.target.dataset.source;
  // const onMyIndex = evt.target.dataset.index;
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  openModal.classList.remove('is-open');
  lightboxImg.src = '';
}
function clickArrowLeft() {
  console.log('click clickArrowLeft');
  lightboxImg.src = collection[0].original;
}
function clickArrowRight() {
  console.log('click clickArrowRight');
  lightboxImg.src = collection[6].original;
}

function onEscKeyPress(evt) {
  // const ESC_KEY_CODE = 'Escape';
  // if (evt.code === ESC_KEY_CODE) {
  //   onCloseModal();
  // }
  switch (evt.code) {
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
