// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);


const galleryList = document.querySelector('.gallery');
// console.log(galleryList);
const galleryElementsMarkup = createGalleryElement(galleryItems);
// console.log(galleryElementsMarkup);

galleryList.insertAdjacentHTML('beforeend', galleryElementsMarkup);

function createGalleryElement(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
            <div class="gallery__item">
              <a class="gallery__link" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  alt="${description}"
                />
              </a>
            </div>`;
    })
    .join('');
}

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,

// <!-- знімає можливість збільшувати зображення при їх гортанні -->
  //   scrollZoom: false,
});