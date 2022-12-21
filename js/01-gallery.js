import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryDivRef = document.querySelector(".gallery");

const galleryMarkup = createGalleryMurkup(galleryItems);

let lagreImageURL;


galleryDivRef.insertAdjacentHTML("beforeend", galleryMarkup);

galleryDivRef.addEventListener("click", onGalleryImageClick);



function createGalleryMurkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>
        `
    )
    .join("");
}
function onGalleryImageClick(event) {
    event.preventDefault(); 

    if (event.target.nodeName !== 'IMG') {
        return
    }
    
    lagreImageURL = event.target.dataset.source;

    showLargeImage();

}
function showLargeImage() {
  function closeModal(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
  const instance = basicLightbox.create(`<img src="${lagreImageURL}">`, {
    onShow: (instance) => {

      window.addEventListener("keydown", closeModal);

    },
    
    onClose: (instance) => {

      window.removeEventListener("keydown", closeModal);

    }

  });

  instance.show();
}



