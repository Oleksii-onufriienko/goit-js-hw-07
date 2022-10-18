import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refGallery = document.querySelector(".gallery");
let modalWindow = null;

let strWhisAllItem = ``;

function escapeKeyModalClose(event) {
  if (event.key === `Escape` && modalWindow && modalWindow.visible()) {
    modalWindow.close();
  }
}

galleryItems.forEach((element) => {
  const { preview, original, description } = element;
  strWhisAllItem += `<div class="gallery__item">
  <a class="gallery__link" href="${original}" onclick="return false;">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
});

refGallery.insertAdjacentHTML("afterbegin", strWhisAllItem);

refGallery.addEventListener("click", (event) => {
  if (event.target.classList.contains("gallery")) {
    return;
  }
  modalWindow = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`,
    {
      onClose: () => {
        document.addEventListener("keydown", escapeKeyModalClose);
      },
    }
  );
  modalWindow.show();
  document.addEventListener("keydown", escapeKeyModalClose);
});
