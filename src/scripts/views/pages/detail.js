import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
    async render() {
      return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
      `;
    },
   
    async afterRender() {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const detail = await RestaurantDbSource.DetailRestaurant(url.id);
      const restaurantContainer = document.querySelector('#restaurant');
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(detail.restaurant);

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: url.id,
          pictureId: detail.restaurant.pictureId,
          city: detail.restaurant.city,
          rating: detail.restaurant.rating,
          description: detail.restaurant.description,
        },

      });
      
    },
  };
   
  export default Detail;