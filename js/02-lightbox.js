import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryDivRef = document.querySelector(".gallery");

const galleryMarkup = createGalleryMurkup(galleryItems);

galleryDivRef.insertAdjacentHTML("beforeend", galleryMarkup);


const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });

function createGalleryMurkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `
    )
    .join("");
}
