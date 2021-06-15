import { createRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
    getTemplate() {
        return `
      <div class="content">
      <input id="query" type="text">
      <h2 class="content__heading">Your Liked Restaurants</h2>
          <div id="restaurants" class="restaurants">
              
                 
              </div>
          </div>
     
  `;
    }


    runWhenUserIsSearching(callback) {
        document.getElementById('query').addEventListener('change', (event) => {
            callback(event.target.value);
        });
    }

    showRestaurants(restaurants) {
        this.showFavoriteRestaurants(restaurants);
    }

    showFavoriteRestaurants(restaurants = []) {
        let html;
        if (restaurants.length) {
            html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '');
        } else {
            html = this._getEmptyRestaurantTemplate();
        }

        document.getElementById('restaurants').innerHTML = html;

        document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
    }

    _getEmptyRestaurantTemplate() {
        return '<div class="restaurant-item__not__found restaurants__not__found">Tidak ada restaurant untuk ditampilkan</div>';
    }
}

export default FavoriteRestaurantSearchView;




// class FavoriteRestaurantSearchView {
//     getTemplate() {
//         return `
//           <div id="restaurant-search-container">
//               <input id="query" type="text">
//               <div class="restaurant-result-container">
//                   <ul class="restaurants">
//                   </ul>
//               </div>
//           </div>
//           `;
//     }

//     runWhenUserIsSearching(callback) {
//         document.getElementById('query').addEventListener('change', (event) => {
//             callback(event.target.value);
//         });
//     }

//     showRestaurants(restaurants) {
//         let html;
//         if (restaurants.length > 0) {
//             html = restaurants.reduce(
//                 (carry, restaurant) => carry.concat(`<li class="restaurant"><span class="restaurant__title">${restaurant.title || '-'}</span></li>`),
//                 '',
//             );
//         } else {
//             html = '<div class="restaurants__not__found">Film tidak ditemukan</div>';
//         }

//         document.querySelector('.restaurants').innerHTML = html;

//         document.getElementById('restaurant-search-container')
//             .dispatchEvent(new Event('restaurants:searched:updated'));
//     }
// }