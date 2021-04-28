import collection from './gallery-items.js';

const container = document.querySelector('.js-gallery');
const cardMarkup = createGalleryHtml(collection);

container.insertAdjacentHTML('afterbegin', cardMarkup);

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
</li>;`;
    })
    .join('');
}
console.log(createGalleryHtml(collection));
