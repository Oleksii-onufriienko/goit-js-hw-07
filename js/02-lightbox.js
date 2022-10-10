import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refGallery = document.querySelector(".gallery");
let modalWindow = null;

let strWhisAllItem = ``;

galleryItems.forEach((element) => {
  const { preview, original, description } = element;

  strWhisAllItem += `<a class="gallery__item" href="${original}" onclick="return false;">
  <img class="gallery__image" src="${preview}" alt="${description}" title =${description}/>
</a>`;
  return;
});

refGallery.insertAdjacentHTML("afterbegin", strWhisAllItem);

var lightbox = new SimpleLightbox(".gallery a", {
  /* options */
  captionDelay: 250,
});
