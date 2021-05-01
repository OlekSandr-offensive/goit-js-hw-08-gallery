import collection from './gallery-items.js';

const galleryContainer = document.querySelector('ul.js-gallery');
const openModal = document.querySelector('div.js-lightbox');
const closeModalBtn = document.querySelector('[data-action="close-lightbox"]');
const lightboxImg = document.querySelector('img.lightbox__image');

const cardMarkup = createGalleryHtml(collection);

galleryContainer.insertAdjacentHTML('afterbegin', cardMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick);

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

function onGalleryContainerClick(evt) {
  evt.preventDefault();
  const isGalleryImgEl = evt.target.classList.contains('gallery__image');
  if (!isGalleryImgEl) {
    return;
  }
  closeModalBtn.addEventListener('click', onCloseModal);
  openModal.classList.add('is-open');
  lightboxImg.src = evt.target.dataset.source;
}

function onCloseModal() {
  openModal.classList.remove('is-open');
}
