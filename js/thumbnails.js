import {generatePhotos} from './data.js';

const photos = generatePhotos();
const thumbnailsFragment = document.createDocumentFragment();

const picturesElement = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture').content;

const renderThumbnails = () => {
  photos.forEach(({url, likes, comments}) => {
    const thumbnailElement = thumbnailTemplate.cloneNode(true);

    thumbnailElement.querySelector('.picture__img').src = url;
    thumbnailElement.querySelector('.picture__likes').textContent = likes;
    thumbnailElement.querySelector('.picture__comments').textContent = comments.length;

    thumbnailsFragment.appendChild(thumbnailElement);
  });

  picturesElement.appendChild(thumbnailsFragment);
};

export {renderThumbnails};
