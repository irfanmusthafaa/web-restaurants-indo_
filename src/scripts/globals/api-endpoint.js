import CONFIG from './config';

const API_ENDPOINT = {
  KEY: '12345',
  RESTAURANT: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  REWIEW: `${CONFIG.BASE_URL}/rewiew`,
};

export default API_ENDPOINT;
