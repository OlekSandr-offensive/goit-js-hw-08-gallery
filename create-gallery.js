import collection from './gallery-items.js';

const container = document.querySelector('.js-gallery');
// const urlRef = document.querySelector('');
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
// console.log(createGalleryHtml(collection));
function onContainerClick(evt) {
  const isGalleryLinkEl = evt.target.classList.contains('gallery__link');
  if (!isGalleryLinkEl) {
    return;
  }
  console.log(evt.target);
}

// const refs = {
//   //   openModalBtn: document.querySelector('[data-modal-open]'),
//   closeModalBtn: document.querySelector('[close-lightbox]'),
//   //   backdrop: document.querySelector('[data-backdrop]'),
// };

// // refs.openModalBtn.addEventListener('click', toggleModal);
// refs.closeModalBtn.addEventListener('click', toggleModal);

// function toggleModal() {
//   refs.backdrop.classList.toggle('is-open');
// }
