import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export function imagesRequest(value) {
  return axios.get('', {
    params: {
      key: '49255995-7f6d469d944259310339ef533',
      q: value,
      image_type: 'photo',
      per_page: 200,
      orientation: 'horizontal',
      safesearch: true,
    },
  });
}
