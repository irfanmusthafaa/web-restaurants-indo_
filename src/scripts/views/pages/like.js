/* eslint-disable no-new */
import FavoriteRestaurantIdb from '../../data/favorite-idb';
import FavoriteRestaurantSearchView from './liked-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from './liked-restaurants/favorite-restaurant-show-presenter';
import FavoriteRestaurantSearchPresenter from './liked-restaurants/favorite-restaurant-search-presenter';

const view = new FavoriteRestaurantSearchView();

const Like = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
  },

};

export default Like;

// import FavoriteRestaurantIdb from '../../data/favorite-idb';
// import { createRestaurantItemTemplate } from '../templates/template-creator';

// const Like = {
//     async render() {
//         return `
//       <div class="content">
//         <h2 class="content__heading">Your Liked Restaurant</h2>
//         <div id="restaurants" class="restaurants">

//         </div>
//       </div>
//     `;
//     },

//     async afterRender() {
//         const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
//         const restaurantsContainer = document.querySelector('#restaurants');
//         restaurants.forEach((restaurant) => {
//             restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
//         });
//     },
// };

// export default Like;
