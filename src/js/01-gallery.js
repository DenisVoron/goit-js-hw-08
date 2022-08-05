// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);


import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector('.gallery');

const imgMarkup = createGalleryCard(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imgMarkup);

galleryContainer.addEventListener('click', onImageContainerClick);


function createGalleryCard(card) {
    return card.map(({ preview, original, description }) => {
        return `<div class="gallery">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </div>
        `;
    }).join('');

}

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

function onImageContainerClick(evt) {
    const swatchEl = evt.target;
    //console.log(swatchEl);

    const isImageSwatchEl = !swatchEl.classList.contains('gallery__image');

    if (isImageSwatchEl) {
        return;
    }
    console.log(isImageSwatchEl);
}