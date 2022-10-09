import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refGallery = document.querySelector(".gallery");
let modalWindow = null;

const arrayItem = [];
let strWhisAllItem = ``;

galleryItems.forEach((element) => {
  const { preview, description } = element;
  strWhisAllItem += `<img class="gallery__image gallery__link gallery__item" src="${preview}" alt="${description}" />`;
  return;
});

refGallery.insertAdjacentHTML("afterbegin", strWhisAllItem);

refGallery.addEventListener("click", () => {
  const { original } = galleryItems.find(
    (element) => element.description === event.target.alt
  );

  modalWindow = basicLightbox.create(`<img src="${original}">`);

  modalWindow.show();
});

document.addEventListener("keydown", (event) => {
  if (event.key === `Escape` && modalWindow.visible()) {
    modalWindow.close();
  }
});
