import { imagesRequest } from './pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const renderImages = (event) => {
  event.preventDefault();

  const form = new FormData(event.target);

  const inputValue = form.get('input');

  const loader = document.querySelector('.loader');

  loader.style.display = 'block';

  imagesRequest(inputValue)
    .then((response) => {
      const gallery = document.querySelector('.js-gallery');
      const images = response.data.hits;

      if (images.length === 0) {
        getMessage();
      }
      const markup = images
        .map(
          ({
            webformatURL,
            largeImageURL,
            tags,
            likes,
            views,
            comments,
            downloads,
          }) => {
            return `<li class='gallery__item'>
              <div class='gallery__container '>
                <a href='${largeImageURL}'>
                  <div class='image-wrapper'>
                    <span class='loader'></span>
                    <img
                      class='gallery__image'
                      src='${webformatURL}'
                      alt='${tags}'
                    />
                  </div>
                </a>

                <ul class='gallery_user-stats'>
                  <li class='gallery__user-stats-item'>
                    <p class='gallery__user-stats-text'>
                      Likes:<span>${likes}</span>
                    </p>
                  </li>
                  <li class='gallery__user-stats-item'>
                    <p class='gallery__user-stats-text'>
                      Views:<span>${views}</span>
                    </p>
                  </li>
                  <li class='gallery__user-stats-item'>
                    <p class='gallery__user-stats-text'>
                      Comments:<span>${comments}</span>
                    </p>
                  </li>
                  <li class='gallery__user-stats-item'>
                    <p class='gallery__user-stats-text'>
                      Downloads:<span>${downloads}</span>
                    </p>
                  </li>
                </ul>
              </div>
            </li>`;
          },
        )
        .join('');

      gallery.innerHTML = markup;

      modal();
    })
    .catch((error) => {
      loader.style.display = 'none';
      console.error('Error fetching data:', error);
    })
    .finally(() => {
      loader.style.display = 'none';
    });

  event.target.reset();
  modal();
};

function getMessage() {
  iziToast.show({
    title: 'Sorry,',
    titleSize: '21',
    message:
      'there are no images matching your search query. Please try again!',
    position: 'topRight',
    iconUrl: 'https://www.svgrepo.com/show/340010/cloud-data-ops.svg',
    iconColor: '#ffffff',
    messageSize: '21',
    messageColor: 'black',
  });
}

function modal() {
  const lightbox = new SimpleLightbox('.gallery__container a');

  SimpleLightbox.defaults = {};

  lightbox.refresh();
}
