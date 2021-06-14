import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-idb';

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

        LikeButtonPresenter.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            favoriteRestaurants: FavoriteRestaurantIdb,
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