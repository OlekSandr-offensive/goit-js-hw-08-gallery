import collection from './gallery-items.js';

const container = document.querySelector('ul.js-gallery');
const openModal = document.querySelector('div.js-lightbox');
const closeModalBtn = document.querySelector('[data-action="close-lightbox"]');
const lightboxImg = document.querySelector('img.lightbox__image');

const cardMarkup = createGalleryHtml(collection);

container.insertAdjacentHTML('afterbegin', cardMarkup);
container.addEventListener('click', onContainerClick);

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

function onContainerClick(evt) {
  evt.preventDefault();
  const isGalleryLinkEl = evt.target.classList.contains('gallery__image');
  if (!isGalleryLinkEl) {
    return;
  }
  closeModalBtn.addEventListener('click', onCloseModal);
  openModal.classList.add('is-open');
  lightboxImg.src = evt.target.dataset.source;
}

function onCloseModal() {
  openModal.classList.remove('is-open');
}
