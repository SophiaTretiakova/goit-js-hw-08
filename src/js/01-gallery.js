// Додай бібліотеку SimpleLightbox як залежність проекту,
// використовуючи npm(посилання на CDN з твоєї минулої роботи більше не потрібне).
// Використовуй свій JavaScript код з попередньої домашньої роботи,
// але виконай рефакторинг з урахуванням того,
// що бібліотека була встановлена через npm(синтаксис import /export).

import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const images = document.querySelector('.gallery');
const html = galleryItems.reduce((accumulator, image) => {
  return (
    accumulator +
    `<li class="gallery__item">
   <a class="gallery__link" href="${image.original}">
      <img class="gallery__image" src="${image.original}" alt="${image.description}" />
   </a>
</li>`
  );
}, '');
images.insertAdjacentHTML('beforeend', html);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(galleryItems);
